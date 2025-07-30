import { Calendar as BaseCalendar } from "@/components/ui/calendar";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CalendarProps = ComponentProps<typeof BaseCalendar>;

export function Calendar(props: CalendarProps) {
  return <BaseCalendar className={cn("text-sm", props.className)} {...props} />;
}
