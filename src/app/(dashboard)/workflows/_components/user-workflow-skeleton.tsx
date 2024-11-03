import { Skeleton } from "@/components/ui/skeleton";

const UserWorkflowSkeleton = () => {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((item) => (
        <Skeleton key={item} className="h-32 w-full" />
      ))}
    </div>
  );
};

export default UserWorkflowSkeleton;
