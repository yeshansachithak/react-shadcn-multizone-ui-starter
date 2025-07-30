import * as Base from "@/components/ui/popover";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type PopoverProps = ComponentProps<typeof Base.Popover>;

export function Popover(props: PopoverProps) {
    return <Base.Popover {...props} />;
}

export const PopoverTrigger = Base.PopoverTrigger;
type PopoverContentProps = ComponentProps<typeof Base.PopoverContent>;
export function PopoverContent(props: PopoverContentProps) {
    return <Base.PopoverContent className={cn("rounded-xl", props.className)} {...props} />;
}