import * as Base from "@/components/ui/dropdown-menu";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type DropdownMenuProps = ComponentProps<typeof Base.DropdownMenu>;

export function DropdownMenu(props: DropdownMenuProps) {
    return <Base.DropdownMenu {...props} />;
}

export const DropdownMenuTrigger = Base.DropdownMenuTrigger;
type DropdownMenuContentProps = ComponentProps<typeof Base.DropdownMenuContent>;
export function DropdownMenuContent(props: DropdownMenuContentProps) {
    return <Base.DropdownMenuContent className={cn("rounded-xl", props.className)} {...props} />;
}

export const DropdownMenuLabel = Base.DropdownMenuLabel;
export const DropdownMenuSeparator = Base.DropdownMenuSeparator;
export const DropdownMenuGroup = Base.DropdownMenuGroup;
export const DropdownMenuItem = Base.DropdownMenuItem;
export const DropdownMenuShortcut = Base.DropdownMenuShortcut;