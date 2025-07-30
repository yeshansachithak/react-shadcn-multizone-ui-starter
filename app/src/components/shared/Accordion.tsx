import { Accordion as BaseAccordion } from "@/components/ui/accordion";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type AccordionProps = ComponentProps<typeof BaseAccordion>;

export function Accordion(props: AccordionProps) {
  return <BaseAccordion className={cn("text-sm", props.className)} {...props} />;
}
