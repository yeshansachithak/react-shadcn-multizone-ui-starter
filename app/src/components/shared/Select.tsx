import * as Base from "@/components/ui/select";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SelectProps = ComponentProps<typeof Base.Select>;

export function Select(props: SelectProps) {
    return <Base.Select {...props} />;
}

export const SelectTrigger = Base.SelectTrigger;
export const SelectValue = Base.SelectValue;
type SelectContentProps = ComponentProps<typeof Base.SelectContent>;
export function SelectContent(props: SelectContentProps) {
    return <Base.SelectContent className={cn("rounded-xl", props.className)} {...props} />;
}

export const SelectItem = Base.SelectItem;
export const SelectGroup = Base.SelectGroup;
export const SelectLabel = Base.SelectLabel;
export const SelectSeparator = Base.SelectSeparator;