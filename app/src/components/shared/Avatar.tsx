import { Avatar as BaseAvatar } from "@/components/ui/avatar";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type AvatarProps = ComponentProps<typeof BaseAvatar>;

export function Avatar(props: AvatarProps) {
  return <BaseAvatar className={cn("text-sm", props.className)} {...props} />;
}
