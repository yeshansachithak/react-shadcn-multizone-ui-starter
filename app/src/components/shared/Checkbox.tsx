import { Checkbox as BaseCheckbox } from "@/components/ui/checkbox";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CheckboxProps = ComponentProps<typeof BaseCheckbox>;

export function Checkbox(props: CheckboxProps) {
  return <BaseCheckbox className={cn("text-sm", props.className)} {...props} />;
}
