import { Loader2 } from "lucide-react";

const CustomLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Loader2 className="size-4 animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  );
};

export default CustomLoader;
