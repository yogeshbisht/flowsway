import React from "react";
import { cn } from "@/lib/utils";
import { TaskInput } from "@/types/task";
import { Handle, Position } from "@xyflow/react";
import NodeParamField from "./node-param-field";

const NodeInput = ({ input }: { input: TaskInput }) => {
  return (
    <div className="flex justify-start relative p-3 bg-secondary w-full">
      <NodeParamField param={input} />
      {!input.hideHandle && (
        <Handle
          id={input.name}
          type="target"
          position={Position.Left}
          className={cn(
            "!bg-muted-foreground !border-2 !border-background !-left-2 !size-4"
          )}
        />
      )}
    </div>
  );
};

export default NodeInput;
