import { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useSearchParams } from "react-router-dom";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';
import { collection, doc, addDoc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "@/lib/firebase";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Trash2, Download, Upload } from 'lucide-react';
import { toast } from 'sonner';

// Define TypeScript interfaces
interface Question {
  id: string;
  text: string;
}

interface Summary {
  min: number;
  max: number;
  text: string;
}

interface Trait {
  trait: string;
  weight: number;
  questions: Question[];
  summaries: Summary[];
}

interface Subcategory {
  subcategory: string;
  subcategory_weight: number;
  subcategory_narration?: string;
  traits: Trait[];
}

interface Category {
  category: string;
  category_weight: number;
  subcategories: Subcategory[];
}

interface SurveyFormData {
  title: string;
  audience: 'employee' | 'employer';
  required: boolean;
  order: number;
  categories: Category[];
}

// Zod schema for validation
const surveySchema = z.object({
  title: z.string().min(1, 'Survey title is required'),
  audience: z.enum(['employee', 'employer']),
  required: z.boolean(),
  order: z.number().min(1, 'Order must be at least 1'),
  categories: z.array(
    z.object({
      category: z.string().min(1, 'Category name is required'),
      category_weight: z.number().min(0, 'Category weight must be non-negative'),
      subcategories: z.array(
        z.object({
          subcategory: z.string().min(1, 'Subcategory name is required'),
          subcategory_weight: z.number().min(0, 'Subcategory weight must be non-negative'),
          subcategory_narration: z.string().optional(),
          traits: z.array(
            z.object({
              trait: z.string().min(1, 'Trait name is required'),
              weight: z.number().min(0, 'Trait weight must be non-negative'),
              questions: z.array(
                z.object({
                  id: z.string(),
                  text: z.string().min(1, 'Question text is required'),
                })
              ),
              summaries: z.array(
                z.object({
                  min: z.number().min(0, 'Min score must be non-negative'),
                  max: z.number().min(0, 'Max score must be non-negative'),
                  text: z.string().min(1, 'Summary text is required'),
                })
              ),
            })
          ),
        })
      ),
    })
  ),
});

function ManageSurvey() {
  const [searchParams] = useSearchParams();
  const surveyId = searchParams.get("surveyId");

  const [isSaving, setIsSaving] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [importJson, setImportJson] = useState('');

  const { register, control, handleSubmit, reset, getValues, formState: { errors } } = useForm<SurveyFormData>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      title: '',
      audience: 'employee',
      required: true,
      order: 1,
      categories: [],
    },
  });

  const { fields: categories, append: appendCategory, remove: removeCategory } = useFieldArray({
    control,
    name: 'categories',
  });

  const addSubcategory = (catIndex: number) => {
    const newCategories = [...categories];
    newCategories[catIndex].subcategories.push({
      subcategory: '',
      subcategory_weight: 0,
      subcategory_narration: '',
      traits: [],
    });
    reset({ ...getValues(), categories: newCategories });
  };

  const addTrait = (catIndex: number, subIndex: number) => {
    const newCategories = [...categories];
    newCategories[catIndex].subcategories[subIndex].traits.push({
      trait: '',
      weight: 0,
      questions: [],
      summaries: [],
    });
    reset({ ...getValues(), categories: newCategories });
  };

  const addQuestion = (catIndex: number, subIndex: number, traitIndex: number) => {
    const newCategories = [...categories];
    newCategories[catIndex].subcategories[subIndex].traits[traitIndex].questions.push({
      id: uuidv4(),
      text: '',
    });
    reset({ ...getValues(), categories: newCategories });
  };

  const addTraitSummary = (catIndex: number, subIndex: number, traitIndex: number) => {
    const newCategories = [...categories];
    newCategories[catIndex].subcategories[subIndex].traits[traitIndex].summaries.push({
      min: 0,
      max: 0,
      text: '',
    });
    reset({ ...getValues(), categories: newCategories });
  };

  const exportSurveyAsJson = () => {
    const exportData = {
      title: getValues('title'),
      audience: getValues('audience'),
      required: getValues('required'),
      order: getValues('order'),
      categories: getValues('categories'),
    };
    setImportJson(JSON.stringify(exportData, null, 2));
    setShowExportModal(true);
  };

  const importSurveyFromJson = () => {
    try {
      const json = JSON.parse(importJson) as SurveyFormData;
      reset({
        title: json.title || '',
        audience: json.audience || 'employee',
        required: json.required !== false,
        order: json.order || 1,
        categories: json.categories || [],
      });
      setShowImportModal(false);
      toast.success('✅ Imported successfully');
    } catch (e) {
      toast.error('❌ Invalid JSON');
    }
  };

  const onSubmit = async (values: SurveyFormData) => {
    setIsSaving(true);
    const payload = {
      ...values,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    try {
      if (surveyId) {
        await setDoc(doc(db, "surveys", surveyId), payload);
        toast.success("✅ Survey updated");
      } else {
        await addDoc(collection(db, "surveys"), payload);
        toast.success("✅ Survey created");
      }
    } catch (err) {
      toast.error("❌ Failed to save survey");
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    if (surveyId) {
      const loadSurvey = async () => {
        const ref = doc(db, "surveys", surveyId);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          const data = snapshot.data();
          // TODO: set form values here using `reset(data)`
          reset({
            title: data.title ?? '',
            audience: data.audience ?? 'employee',
            required: data.required ?? true,
            order: data.order ?? 1,
            categories: data.categories ?? [],
          });
        }
      };
      loadSurvey();
    }
  }, [surveyId, reset]);


  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-primary p-4 text-primary-foreground flex justify-between items-center">
        <h1 className="text-xl font-bold">🧠 Survey Manager</h1>
        <Button variant="ghost" size="icon" onClick={() => setShowImportModal(true)} title="Import Survey">
          <Upload className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" onClick={exportSurveyAsJson} title="Export Survey">
          <Download className="h-5 w-5" />
        </Button>
      </nav>
      {isSaving ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
        </div>
      ) : (
        <div className="p-4 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <Label htmlFor="title">Survey Title</Label>
              <Input
                id="title"
                {...register('title')}
                className={errors.title ? 'border-destructive' : ''}
              />
              {errors.title && <p className="text-destructive text-sm">{errors.title.message}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="audience">Survey For</Label>
              <Select
                value={getValues('audience')}
                onValueChange={(value: 'employee' | 'employer') => reset({ ...getValues(), audience: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select audience" />
                </SelectTrigger>
                <SelectContent>
                  {['employee', 'employer'].map((r) => (
                    <SelectItem key={r} value={r}>
                      {r.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.audience && <p className="text-destructive text-sm">{errors.audience.message}</p>}
            </div>
            <div className="mb-4 flex items-center space-x-2">
              <Label>Mandatory?</Label>
              <Switch
                checked={getValues('required')}
                onCheckedChange={(checked) => reset({ ...getValues(), required: checked })}
              />
              {errors.required && <p className="text-destructive text-sm">{errors.required.message}</p>}
            </div>
            <div className="mb-4">
              <Label htmlFor="order">Order</Label>
              <Input
                id="order"
                type="number"
                {...register('order', { valueAsNumber: true })}
                className={errors.order ? 'border-destructive' : ''}
              />
              {errors.order && <p className="text-destructive text-sm">{errors.order.message}</p>}
            </div>
            {categories.map((category, catIndex) => (
              <Card key={category.id} className="mb-4">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    <Input
                      placeholder="🗂️ Category"
                      {...register(`categories.${catIndex}.category`)}
                      className={errors.categories?.[catIndex]?.category ? 'border-destructive' : ''}
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="ml-2"
                      onClick={() => removeCategory(catIndex)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  {errors.categories?.[catIndex]?.category && (
                    <p className="text-destructive text-sm">{errors.categories[catIndex].category.message}</p>
                  )}
                  <Input
                    type="number"
                    placeholder="Category Weight"
                    {...register(`categories.${catIndex}.category_weight`, { valueAsNumber: true })}
                    className={errors.categories?.[catIndex]?.category_weight ? 'border-destructive' : ''}
                  />
                  {errors.categories?.[catIndex]?.category_weight && (
                    <p className="text-destructive text-sm">{errors.categories[catIndex].category_weight.message}</p>
                  )}
                  {category.subcategories.map((subcategory, subIndex) => (
                    <Card key={subIndex} className="bg-muted p-4 mb-2">
                      <div className="flex items-center mb-2">
                        <Input
                          placeholder="📁 Subcategory"
                          {...register(`categories.${catIndex}.subcategories.${subIndex}.subcategory`)}
                          className={
                            errors.categories?.[catIndex]?.subcategories?.[subIndex]?.subcategory
                              ? 'border-destructive'
                              : ''
                          }
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="ml-2"
                          onClick={() => {
                            const newCategories = [...categories];
                            newCategories[catIndex].subcategories.splice(subIndex, 1);
                            reset({ ...getValues(), categories: newCategories });
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      {errors.categories?.[catIndex]?.subcategories?.[subIndex]?.subcategory && (
                        <p className="text-destructive text-sm">
                          {errors.categories[catIndex].subcategories[subIndex].subcategory.message}
                        </p>
                      )}
                      <Input
                        type="number"
                        placeholder="Subcategory Weight"
                        {...register(`categories.${catIndex}.subcategories.${subIndex}.subcategory_weight`, {
                          valueAsNumber: true,
                        })}
                        className={
                          errors.categories?.[catIndex]?.subcategories?.[subIndex]?.subcategory_weight
                            ? 'border-destructive'
                            : ''
                        }
                      />
                      {errors.categories?.[catIndex]?.subcategories?.[subIndex]?.subcategory_weight && (
                        <p className="text-destructive text-sm">
                          {errors.categories[catIndex].subcategories[subIndex].subcategory_weight.message}
                        </p>
                      )}
                      <Input
                        placeholder="Subcategory Narration"
                        {...register(`categories.${catIndex}.subcategories.${subIndex}.subcategory_narration`)}
                        className="mb-2"
                      />
                      {subcategory.traits.map((trait, traitIndex) => (
                        <Card key={traitIndex} className="bg-teal-50 p-4 mb-2">
                          <div className="flex items-center mb-2">
                            <Input
                              placeholder="💡 Trait"
                              {...register(`categories.${catIndex}.subcategories.${subIndex}.traits.${traitIndex}.trait`)}
                              className={
                                errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]?.trait
                                  ? 'border-destructive'
                                  : ''
                              }
                            />
                            <Button
                              variant="destructive"
                              size="icon"
                              className="ml-2"
                              onClick={() => {
                                const newCategories = [...categories];
                                newCategories[catIndex].subcategories[subIndex].traits.splice(traitIndex, 1);
                                reset({ ...getValues(), categories: newCategories });
                              }}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          {errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]?.trait && (
                            <p className="text-destructive text-sm">
                              {errors.categories[catIndex].subcategories[subIndex].traits[traitIndex].trait.message}
                            </p>
                          )}
                          <Input
                            type="number"
                            placeholder="Trait Weight"
                            {...register(
                              `categories.${catIndex}.subcategories.${subIndex}.traits.${traitIndex}.weight`,
                              { valueAsNumber: true }
                            )}
                            className={
                              errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]?.weight
                                ? 'border-destructive'
                                : ''
                            }
                          />
                          {errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]?.weight && (
                            <p className="text-destructive text-sm">
                              {errors.categories[catIndex].subcategories[subIndex].traits[traitIndex].weight.message}
                            </p>
                          )}
                          {trait.questions.map((question, qIndex) => (
                            <div key={question.id} className="bg-indigo-100 p-4 mb-2 rounded">
                              <div className="flex items-center">
                                <Input
                                  placeholder="❓ Question"
                                  {...register(
                                    `categories.${catIndex}.subcategories.${subIndex}.traits.${traitIndex}.questions.${qIndex}.text`
                                  )}
                                  className={
                                    errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]
                                      ?.questions?.[qIndex]?.text
                                      ? 'border-destructive'
                                      : ''
                                  }
                                />
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  className="ml-2"
                                  onClick={() => {
                                    const newCategories = [...categories];
                                    newCategories[catIndex].subcategories[subIndex].traits[
                                      traitIndex
                                    ].questions.splice(qIndex, 1);
                                    reset({ ...getValues(), categories: newCategories });
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                              {errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]?.questions?.[
                                qIndex
                              ]?.text && (
                                  <p className="text-destructive text-sm">
                                    {
                                      errors.categories[catIndex].subcategories[subIndex].traits[traitIndex].questions[
                                        qIndex
                                      ].text.message
                                    }
                                  </p>
                                )}
                            </div>
                          ))}
                          <Button
                            variant="link"
                            onClick={() => addQuestion(catIndex, subIndex, traitIndex)}
                          >
                            ➕ Add Question
                          </Button>
                          <hr className="my-4" />
                          {trait.summaries.map((_, sIndex) => (
                            <Card key={sIndex} className="bg-yellow-50 p-4 mb-2">
                              <div className="flex items-center mb-2">
                                <Input
                                  placeholder="📝 Summary Text"
                                  {...register(
                                    `categories.${catIndex}.subcategories.${subIndex}.traits.${traitIndex}.summaries.${sIndex}.text`
                                  )}
                                  className={
                                    errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]
                                      ?.summaries?.[sIndex]?.text
                                      ? 'border-destructive'
                                      : ''
                                  }
                                />
                                <Button
                                  variant="destructive"
                                  size="icon"
                                  className="ml-2"
                                  onClick={() => {
                                    const newCategories = [...categories];
                                    newCategories[catIndex].subcategories[subIndex].traits[
                                      traitIndex
                                    ].summaries.splice(sIndex, 1);
                                    reset({ ...getValues(), categories: newCategories });
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                              {errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]?.summaries?.[
                                sIndex
                              ]?.text && (
                                  <p className="text-destructive text-sm">
                                    {
                                      errors.categories[catIndex].subcategories[subIndex].traits[traitIndex].summaries[
                                        sIndex
                                      ].text.message
                                    }
                                  </p>
                                )}
                              <Input
                                type="number"
                                placeholder="Min Score"
                                {...register(
                                  `categories.${catIndex}.subcategories.${subIndex}.traits.${traitIndex}.summaries.${sIndex}.min`,
                                  { valueAsNumber: true }
                                )}
                                className={
                                  errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]
                                    ?.summaries?.[sIndex]?.min
                                    ? 'border-destructive'
                                    : ''
                                }
                              />
                              {errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]?.summaries?.[
                                sIndex
                              ]?.min && (
                                  <p className="text-destructive text-sm">
                                    {
                                      errors.categories[catIndex].subcategories[subIndex].traits[traitIndex].summaries[
                                        sIndex
                                      ].min.message
                                    }
                                  </p>
                                )}
                              <Input
                                type="number"
                                placeholder="Max Score"
                                {...register(
                                  `categories.${catIndex}.subcategories.${subIndex}.traits.${traitIndex}.summaries.${sIndex}.max`,
                                  { valueAsNumber: true }
                                )}
                                className={
                                  errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]
                                    ?.summaries?.[sIndex]?.max
                                    ? 'border-destructive'
                                    : ''
                                }
                              />
                              {errors.categories?.[catIndex]?.subcategories?.[subIndex]?.traits?.[traitIndex]?.summaries?.[
                                sIndex
                              ]?.max && (
                                  <p className="text-destructive text-sm">
                                    {
                                      errors.categories[catIndex].subcategories[subIndex].traits[traitIndex].summaries[
                                        sIndex
                                      ].max.message
                                    }
                                  </p>
                                )}
                            </Card>
                          ))}
                          <Button
                            variant="link"
                            onClick={() => addTraitSummary(catIndex, subIndex, traitIndex)}
                          >
                            ➕ Add Summary
                          </Button>
                        </Card>
                      ))}
                      <Button
                        variant="link"
                        onClick={() => addTrait(catIndex, subIndex)}
                      >
                        ➕ Add Trait
                      </Button>
                    </Card>
                  ))}
                  <Button
                    variant="link"
                    onClick={() => addSubcategory(catIndex)}
                  >
                    ➕ Add Subcategory
                  </Button>
                </CardContent>
              </Card>
            ))}
            <Button
              variant="link"
              onClick={() => appendCategory({ category: '', category_weight: 0, subcategories: [] })}
            >
              ➕ Add Category
            </Button>
            <Button type="submit" className="mt-4" disabled={isSaving}>
              {surveyId ? 'Update Survey' : 'Create Survey'}
            </Button>
          </form>
        </div>
      )}
      <Dialog open={showExportModal} onOpenChange={setShowExportModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export JSON</DialogTitle>
          </DialogHeader>
          <Textarea value={importJson} readOnly className="h-64" />
          <DialogFooter>
            <Button onClick={() => setShowExportModal(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={showImportModal} onOpenChange={setShowImportModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Paste JSON to Import</DialogTitle>
          </DialogHeader>
          <Textarea
            value={importJson}
            onChange={(e) => setImportJson(e.target.value)}
            className="h-64"
            placeholder="Paste your JSON here"
          />
          <DialogFooter>
            <Button variant="secondary" onClick={() => setShowImportModal(false)}>
              Cancel
            </Button>
            <Button onClick={importSurveyFromJson}>Import</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ManageSurvey