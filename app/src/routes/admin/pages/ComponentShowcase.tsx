// src/routes/admin/pages/ComponentShowcase.tsx
import {
    Button,
    Input,
    Label,
    Checkbox,
    Switch,
    Calendar,
    Textarea,
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    Dialog,
    DialogTrigger,
    DialogContent,
    Avatar,
    Progress,
    Popover,
    PopoverTrigger,
    PopoverContent,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    Table,
    Sheet,
    SheetTrigger,
    SheetContent,
    Sonner
} from "@/components/shared/";

export default function ComponentShowcase() {
    return (
        <div className="p-10 space-y-10">
            <h1 className="text-3xl font-bold">Component Showcase</h1>

            <section>
                <h2 className="text-xl font-semibold mb-2">Buttons & Inputs</h2>
                <Button>Primary Button</Button>
                <Input placeholder="Enter text..." className="mt-2" />
                <Textarea placeholder="Enter long text..." className="mt-2" />
            </section>

            <section>
                <h2 className="text-xl font-semibold mt-6">Form Controls</h2>
                <Label htmlFor="cb">Label</Label>
                <Checkbox id="cb" className="ml-2" />
                <Switch className="mt-2" />
                <Calendar className="mt-4" />
            </section>

            <section>
                <h2 className="text-xl font-semibold mt-6">Select</h2>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="one">One</SelectItem>
                        <SelectItem value="two">Two</SelectItem>
                    </SelectContent>
                </Select>
            </section>

            <section>
                <h2 className="text-xl font-semibold mt-6">Tooltip & Popover</h2>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button>Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>Tooltip content</TooltipContent>
                </Tooltip>

                <Popover>
                    <PopoverTrigger asChild>
                        <Button className="ml-4">Open Popover</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64">Popover content</PopoverContent>
                </Popover>
            </section>

            <section>
                <h2 className="text-xl font-semibold mt-6">Card</h2>
                <Card className="w-[300px]">
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                    </CardHeader>
                    <CardContent>Some card content here.</CardContent>
                </Card>
            </section>

            <section>
                <h2 className="text-xl font-semibold mt-6">Tabs</h2>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Account content</TabsContent>
                    <TabsContent value="password">Password content</TabsContent>
                </Tabs>
            </section>

            <section>
                <h2 className="text-xl font-semibold mt-6">Progress</h2>
                <Progress value={45} />
            </section>
        </div>
    );
}
