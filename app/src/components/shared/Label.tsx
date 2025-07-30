import { Label as BaseLabel } from "@/components/ui/label";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type LabelProps = ComponentProps<typeof BaseLabel>;

export function Label(props: LabelProps) {
  return <BaseLabel className={cn("text-sm", props.className)} {...props} />;
}
