import * as Base from "@/components/ui/sheet";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SheetProps = ComponentProps<typeof Base.Sheet>;

export function Sheet(props: SheetProps) {
    return <Base.Sheet {...props} />;
}

export const SheetTrigger = Base.SheetTrigger;
type SheetContentProps = ComponentProps<typeof Base.SheetContent>;
export function SheetContent(props: SheetContentProps) {
    return <Base.SheetContent className={cn("rounded-xl", props.className)} {...props} />;
}

export const SheetHeader = Base.SheetHeader;
export const SheetTitle = Base.SheetTitle;
export const SheetDescription = Base.SheetDescription;
export const SheetFooter = Base.SheetFooter;