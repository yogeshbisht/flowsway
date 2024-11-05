import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TaskInput } from "@/types/task";

const StringParam = ({ param }: { param: TaskInput }) => {
  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor="name">{param.name}</Label>
      <Input id="name" />
    </div>
  );
};

export default StringParam;
