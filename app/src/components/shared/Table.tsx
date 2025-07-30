import { Table as BaseTable } from "@/components/ui/table";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TableProps = ComponentProps<typeof BaseTable>;

export function Table(props: TableProps) {
  return <BaseTable className={cn("text-sm", props.className)} {...props} />;
}
