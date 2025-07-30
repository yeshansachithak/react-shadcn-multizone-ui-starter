import { Skeleton as BaseSkeleton } from "@/components/ui/skeleton";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SkeletonProps = ComponentProps<typeof BaseSkeleton>;

export function Skeleton(props: SkeletonProps) {
  return <BaseSkeleton className={cn("text-sm", props.className)} {...props} />;
}
