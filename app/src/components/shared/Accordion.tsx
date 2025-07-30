import * as Base from "@/components/ui/accordion";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type AccordionProps = ComponentProps<typeof Base.Accordion>;

export function Accordion(props: AccordionProps) {
  return <Base.Accordion className={cn("text-sm", props.className)} {...props} />;
}

export const AccordionItem = Base.AccordionItem;
export const AccordionTrigger = Base.AccordionTrigger;
export const AccordionContent = Base.AccordionContent;