import * as Base from "@/components/ui/tooltip";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TooltipProps = ComponentProps<typeof Base.Tooltip>;

export function Tooltip(props: TooltipProps) {
    return <Base.Tooltip {...props} />;
}

export const TooltipTrigger = Base.TooltipTrigger;
type TooltipContentProps = ComponentProps<typeof Base.TooltipContent>;
export function TooltipContent(props: TooltipContentProps) {
    return <Base.TooltipContent className={cn("rounded-xl", props.className)} {...props} />;
}