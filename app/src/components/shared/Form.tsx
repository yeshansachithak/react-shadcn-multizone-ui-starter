import * as Base from "@/components/ui/form";
import type { ComponentProps } from "react";

type FormProps = ComponentProps<typeof Base.Form>;

export function Form(props: FormProps) {
  return <Base.Form {...props} />;
}
