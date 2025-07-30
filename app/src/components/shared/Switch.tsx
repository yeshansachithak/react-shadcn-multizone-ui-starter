import { Switch as BaseSwitch } from "@/components/ui/switch";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SwitchProps = ComponentProps<typeof BaseSwitch>;

export function Switch(props: SwitchProps) {
  return <BaseSwitch className={cn("text-sm", props.className)} {...props} />;
}
