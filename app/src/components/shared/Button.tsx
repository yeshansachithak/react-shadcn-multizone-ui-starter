import { Button as BaseButton } from "@/components/ui/button";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<typeof BaseButton>;

export function Button(props: ButtonProps) {
  return <BaseButton className={cn("text-sm", props.className)} {...props} />;
}
