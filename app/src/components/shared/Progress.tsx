import { Progress as BaseProgress } from "@/components/ui/progress";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ProgressProps = ComponentProps<typeof BaseProgress>;

export function Progress(props: ProgressProps) {
  return <BaseProgress className={cn("text-sm", props.className)} {...props} />;
}
