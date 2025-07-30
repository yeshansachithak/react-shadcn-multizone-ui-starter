import { Input as BaseInput } from "@/components/ui/input";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type InputProps = ComponentProps<typeof BaseInput>;

export function Input(props: InputProps) {
  return <BaseInput className={cn("text-sm", props.className)} {...props} />;
}
