import { Skeleton as ShadSkeleton } from "@/components/ui/skeleton";

export const Skeleton = (props: React.ComponentProps<typeof ShadSkeleton>) => {
  return <ShadSkeleton {...props} />;
};
