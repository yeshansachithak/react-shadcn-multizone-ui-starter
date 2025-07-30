import { Toaster as BaseToaster } from "@/components/ui/sonner";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SonnerProps = ComponentProps<typeof BaseToaster>;

export function Sonner(props: SonnerProps) {
  return <BaseToaster className={cn("text-sm", props.className)} {...props} />;
}
