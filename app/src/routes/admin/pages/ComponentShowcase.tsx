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
        <div className="min-h-screen p-6">
            <div className="w-full max-w-6xl mx-auto space-y-12">
                <h1 className="text-4xl font-bold text-center mb-8">Component Showcase</h1>

                {/* Buttons & Inputs */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Buttons & Inputs</h2>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Buttons</h3>
                        <div className="flex items-center gap-4 flex-wrap">
                            <Button size="sm">Small Button</Button>
                            <Button size="default">Medium Button</Button>
                            <Button size="lg">Large Button</Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Inputs</h3>
                        <div className="space-y-3 max-w-md">
                            <Input placeholder="Small input..." className="h-8 text-sm" />
                            <Input placeholder="Medium input..." />
                            <Input placeholder="Large input..." className="h-12 text-lg px-4" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Textareas</h3>
                        <div className="space-y-3 max-w-md">
                            <Textarea placeholder="Small textarea..." className="h-20 text-sm" />
                            <Textarea placeholder="Medium textarea..." className="h-24" />
                            <Textarea placeholder="Large textarea..." className="h-32 text-lg" />
                        </div>
                    </div>
                </section>

                {/* Form Controls */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Form Controls</h2>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Checkboxes</h3>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="cb-sm" className="h-4 w-4" />
                                <Label htmlFor="cb-sm" className="text-sm">Small</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="cb-md" />
                                <Label htmlFor="cb-md">Medium</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="cb-lg" className="h-6 w-6" />
                                <Label htmlFor="cb-lg" className="text-lg">Large</Label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Switches</h3>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center space-x-2">
                                <Switch className="scale-75" />
                                <Label className="text-sm">Small</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch />
                                <Label>Medium</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch className="scale-125" />
                                <Label className="text-lg">Large</Label>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Calendar</h3>
                        <div className="flex gap-8 flex-wrap">
                            <div className="text-center">
                                <p className="text-sm font-medium mb-2">Small</p>
                                <Calendar className="scale-75 origin-top-left" />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium mb-2">Medium</p>
                                <Calendar />
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-medium mb-2">Large</p>
                                <Calendar className="scale-110 origin-top-left" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Select */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Select</h2>
                    <div className="flex items-center gap-4 flex-wrap">
                        <Select>
                            <SelectTrigger className="w-32 h-8 text-sm">
                                <SelectValue placeholder="Small" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="one">One</SelectItem>
                                <SelectItem value="two">Two</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-40">
                                <SelectValue placeholder="Medium" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="one">One</SelectItem>
                                <SelectItem value="two">Two</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-48 h-12 text-lg">
                                <SelectValue placeholder="Large" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="one">One</SelectItem>
                                <SelectItem value="two">Two</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>

                {/* Tooltip & Popover */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Tooltip & Popover</h2>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Tooltips</h3>
                        <div className="flex items-center gap-4">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button size="sm">Small</Button>
                                </TooltipTrigger>
                                <TooltipContent className="text-xs">Small tooltip</TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button>Medium</Button>
                                </TooltipTrigger>
                                <TooltipContent>Medium tooltip</TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button size="lg">Large</Button>
                                </TooltipTrigger>
                                <TooltipContent className="text-lg p-3">Large tooltip</TooltipContent>
                            </Tooltip>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Popovers</h3>
                        <div className="flex items-center gap-4">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button size="sm">Small</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-48 text-sm">Small popover content</PopoverContent>
                            </Popover>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button>Medium</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-64">Medium popover content</PopoverContent>
                            </Popover>

                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button size="lg">Large</Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 text-lg p-6">Large popover content with more space</PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </section>

                {/* Cards */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Cards</h2>
                    <div className="flex gap-6 flex-wrap">
                        <Card className="w-60">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm">Small Card</CardTitle>
                            </CardHeader>
                            <CardContent className="text-xs">
                                Compact card content for small displays.
                            </CardContent>
                        </Card>

                        <Card className="w-80">
                            <CardHeader>
                                <CardTitle>Medium Card</CardTitle>
                            </CardHeader>
                            <CardContent>
                                Standard card content with comfortable spacing.
                            </CardContent>
                        </Card>

                        <Card className="w-96">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-xl">Large Card</CardTitle>
                            </CardHeader>
                            <CardContent className="text-lg space-y-2">
                                <p>Spacious card content with larger text.</p>
                                <p>Perfect for detailed information display.</p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Tabs */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Tabs</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-medium mb-4">Small Tabs</h3>
                            <Tabs defaultValue="account" className="w-80">
                                <TabsList className="h-8">
                                    <TabsTrigger value="account" className="text-xs px-2">Account</TabsTrigger>
                                    <TabsTrigger value="password" className="text-xs px-2">Password</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account" className="text-sm">Small account content</TabsContent>
                                <TabsContent value="password" className="text-sm">Small password content</TabsContent>
                            </Tabs>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Medium Tabs</h3>
                            <Tabs defaultValue="account" className="w-96">
                                <TabsList>
                                    <TabsTrigger value="account">Account</TabsTrigger>
                                    <TabsTrigger value="password">Password</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account">Medium account content</TabsContent>
                                <TabsContent value="password">Medium password content</TabsContent>
                            </Tabs>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-4">Large Tabs</h3>
                            <Tabs defaultValue="account" className="w-[500px]">
                                <TabsList className="h-12">
                                    <TabsTrigger value="account" className="text-lg px-6">Account</TabsTrigger>
                                    <TabsTrigger value="password" className="text-lg px-6">Password</TabsTrigger>
                                </TabsList>
                                <TabsContent value="account" className="text-lg p-4">Large account content with more spacing</TabsContent>
                                <TabsContent value="password" className="text-lg p-4">Large password content with more spacing</TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </section>

                {/* Progress */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Progress</h2>
                    <div className="space-y-4 max-w-md">
                        <div>
                            <Label className="text-sm">Small Progress</Label>
                            <Progress value={45} className="h-1 mt-1" />
                        </div>
                        <div>
                            <Label>Medium Progress</Label>
                            <Progress value={65} className="mt-2" />
                        </div>
                        <div>
                            <Label className="text-lg">Large Progress</Label>
                            <Progress value={85} className="h-3 mt-2" />
                        </div>
                    </div>
                </section>

                {/* Dialogs */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Dialogs</h2>
                    <div className="flex items-center gap-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="sm">Small Dialog</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-sm">
                                <DialogTitle className="text-lg">Small Dialog</DialogTitle>
                                <DialogDescription className="text-sm">
                                    This is a compact dialog for simple interactions.
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button>Medium Dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>Medium Dialog</DialogTitle>
                                <DialogDescription>
                                    This is a standard dialog with comfortable spacing.
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button size="lg">Large Dialog</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                                <DialogTitle className="text-2xl">Large Dialog</DialogTitle>
                                <DialogDescription className="text-lg">
                                    This is a spacious dialog perfect for detailed content and forms.
                                    It provides ample space for complex interactions.
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </div>
                </section>

                {/* Avatars */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Avatars</h2>
                    <div className="flex items-center gap-6">
                        <div className="text-center">
                            <Avatar className="w-8 h-8">
                                <img src="https://github.com/shadcn.png" alt="avatar" className="rounded-full" />
                            </Avatar>
                            <p className="text-xs mt-1">Small</p>
                        </div>
                        <div className="text-center">
                            <Avatar>
                                <img src="https://github.com/shadcn.png" alt="avatar" className="rounded-full" />
                            </Avatar>
                            <p className="text-sm mt-1">Medium</p>
                        </div>
                        <div className="text-center">
                            <Avatar className="w-16 h-16">
                                <img src="https://github.com/shadcn.png" alt="avatar" className="rounded-full" />
                            </Avatar>
                            <p className="text-sm mt-1">Large</p>
                        </div>
                    </div>
                </section>

                {/* Dropdown Menus */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Dropdown Menus</h2>
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="sm">Small Menu</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="min-w-32">
                                <DropdownMenuItem className="text-xs">Small Item 1</DropdownMenuItem>
                                <DropdownMenuItem className="text-xs">Small Item 2</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button>Medium Menu</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Medium Item 1</DropdownMenuItem>
                                <DropdownMenuItem>Medium Item 2</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="lg">Large Menu</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="min-w-48">
                                <DropdownMenuItem className="text-lg py-3">Large Item 1</DropdownMenuItem>
                                <DropdownMenuItem className="text-lg py-3">Large Item 2</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </section>

                {/* Accordions */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Accordions</h2>

                    <div className="space-y-6">
                        <div className="max-w-md">
                            <h3 className="text-lg font-medium mb-2">Small Accordion</h3>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-sm py-2">Small Section</AccordionTrigger>
                                    <AccordionContent className="text-xs">
                                        Compact accordion content for small spaces.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="max-w-lg">
                            <h3 className="text-lg font-medium mb-2">Medium Accordion</h3>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Medium Section</AccordionTrigger>
                                    <AccordionContent>
                                        Standard accordion content with comfortable spacing.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="max-w-2xl">
                            <h3 className="text-lg font-medium mb-2">Large Accordion</h3>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-lg py-6">Large Section</AccordionTrigger>
                                    <AccordionContent className="text-lg p-4">
                                        Spacious accordion content with larger text and more padding for detailed information.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Tables */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Tables</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Small Table</h3>
                            <Table className="max-w-sm border text-xs">
                                <thead>
                                    <tr>
                                        <th className="text-left p-1">Name</th>
                                        <th className="text-left p-1">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-1">Yeshan</td>
                                        <td className="p-1">Admin</td>
                                    </tr>
                                    <tr>
                                        <td className="p-1">Alex</td>
                                        <td className="p-1">User</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">Medium Table</h3>
                            <Table className="max-w-md border">
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
                        </div>

                        <div>
                            <h3 className="text-lg font-medium mb-2">Large Table</h3>
                            <Table className="max-w-lg border text-lg">
                                <thead>
                                    <tr>
                                        <th className="text-left p-4">Name</th>
                                        <th className="text-left p-4">Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4">Yeshan</td>
                                        <td className="p-4">Admin</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Alex</td>
                                        <td className="p-4">User</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </section>

                {/* Sheets */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Sheets</h2>
                    <div className="flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size="sm">Small Sheet</Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64">
                                <div className="text-sm space-y-2">
                                    <h3 className="font-medium">Small Sheet</h3>
                                    <p>Compact sheet content</p>
                                </div>
                            </SheetContent>
                        </Sheet>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button>Medium Sheet</Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium">Medium Sheet</h3>
                                    <p>Standard sheet content with comfortable spacing</p>
                                </div>
                            </SheetContent>
                        </Sheet>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size="lg">Large Sheet</Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-96">
                                <div className="space-y-6 text-lg">
                                    <h3 className="text-xl font-medium">Large Sheet</h3>
                                    <p>Spacious sheet content with larger text and more padding for detailed information and forms.</p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </section>

                {/* Toast */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold border-b pb-2">Sonner (Toast)</h2>
                    <div className="flex items-center gap-4">
                        <Button
                            size="sm"
                            onClick={() => toast("Small toast message", {
                                style: { fontSize: '14px', padding: '8px 12px' }
                            })}
                        >
                            Small Toast
                        </Button>

                        <Button onClick={() => toast("Medium toast message")}>
                            Medium Toast
                        </Button>

                        <Button
                            size="lg"
                            onClick={() => toast("Large toast message with more content", {
                                style: { fontSize: '16px', padding: '16px 20px' }
                            })}
                        >
                            Large Toast
                        </Button>
                    </div>
                    <Sonner
                        swipeDirections={['right']}
                        toastOptions={{ closeButton: true }}
                        position="bottom-right"
                    />
                </section>
            </div>
        </div>
    );
}