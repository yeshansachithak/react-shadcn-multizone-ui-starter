import { Textarea as BaseTextarea } from "@/components/ui/textarea";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = ComponentProps<typeof BaseTextarea>;

export function Textarea(props: TextareaProps) {
  return <BaseTextarea className={cn("text-sm", props.className)} {...props} />;
}
