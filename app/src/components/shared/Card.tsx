import * as Base from "@/components/ui/card";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentProps<typeof Base.Card>;

export function Card(props: CardProps) {
    return <Base.Card className={cn("text-sm", props.className)} {...props} />;
}

export const CardContent = Base.CardContent;
export const CardFooter = Base.CardFooter;
export const CardHeader = Base.CardHeader;
export const CardTitle = Base.CardTitle;
export const CardDescription = Base.CardDescription;