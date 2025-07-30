import { Toaster as BaseToaster } from "@/components/ui/sonner";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SonnerProps = ComponentProps<typeof BaseToaster>;

export function Sonner({ className, ...props }: SonnerProps) {
  return (
    <BaseToaster {...props} className={cn("text-sm", className)} />
  );
}
