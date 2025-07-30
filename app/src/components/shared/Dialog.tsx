import * as Base from "@/components/ui/dialog";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type DialogProps = ComponentProps<typeof Base.Dialog>;

export function Dialog(props: DialogProps) {
    return <Base.Dialog {...props} />;
}

export const DialogTrigger = Base.DialogTrigger;
type DialogContentProps = ComponentProps<typeof Base.DialogContent>;
export function DialogContent(props: DialogContentProps) {
    return <Base.DialogContent className={cn("rounded-xl", props.className)} {...props} />;
}

export const DialogHeader = Base.DialogHeader;
export const DialogFooter = Base.DialogFooter;
export const DialogTitle = Base.DialogTitle;
export const DialogDescription = Base.DialogDescription;