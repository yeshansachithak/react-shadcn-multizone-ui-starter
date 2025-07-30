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
    DialogTitle,
    DialogDescription,
    Avatar,
    Progress,
    Popover,
    PopoverTrigger,
    PopoverContent,
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
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
import { toast } from "sonner";

export default function ComponentShowcase() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-5xl p-10 space-y-10">
                <h1 className="text-3xl font-bold text-center">Component Showcase</h1>
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

                <section>
                    <h2 className="text-xl font-semibold mt-6">Dialog</h2>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Open Dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle>Dialog Title</DialogTitle>
                            <DialogDescription>This is the dialog content.</DialogDescription>
                        </DialogContent>
                    </Dialog>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mt-6">Avatar</h2>
                    <Avatar>
                        <img src="https://github.com/shadcn.png" alt="avatar" className="rounded-full w-10 h-10" />
                    </Avatar>
                </section>


                <section>
                    <h2 className="text-xl font-semibold mt-6">Dropdown Menu</h2>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>Open Menu</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Item 1</DropdownMenuItem>
                            <DropdownMenuItem>Item 2</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mt-6">Accordion</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Section 1</AccordionTrigger>
                            <AccordionContent>This is the content for section 1.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mt-6">Table</h2>
                    <Table className="w-full border">
                        <thead>
                            <tr>
                                <th className="text-left p-2">Name</th>
                                <th className="text-left p-2">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-2">Yeshan</td>
                                <td className="p-2">Admin</td>
                            </tr>
                            <tr>
                                <td className="p-2">Alex</td>
                                <td className="p-2">User</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mt-6">Sheet</h2>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button>Open Sheet</Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]">
                            <p>This is sheet content</p>
                        </SheetContent>
                    </Sheet>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mt-6">Sonner (Toast)</h2>
                    <Button onClick={() => toast("Hello from Sonner!")}>Show Toast</Button>
                    <Sonner swipeDirections={['right']} toastOptions={{ closeButton: true }} />
                </section>
            </div>
        </div>
    );
}
