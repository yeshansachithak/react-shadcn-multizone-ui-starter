import * as Base from "@/components/ui/tabs";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TabsProps = ComponentProps<typeof Base.Tabs>;

export function Tabs(props: TabsProps) {
    return <Base.Tabs className={cn("text-sm", props.className)} {...props} />;
}

export const TabsList = Base.TabsList;
export const TabsTrigger = Base.TabsTrigger;
export const TabsContent = Base.TabsContent;