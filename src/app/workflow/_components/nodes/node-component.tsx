import { memo } from "react";
import { NodeProps } from "@xyflow/react";
import NodeCard from "./node-card";
import NodeHeader from "./node-header";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { AppNodeData } from "@/types/app-node";
import NodeInput from "./node-input";

const NodeComponent = memo((props: NodeProps) => {
  const nodeData = props.data as AppNodeData;
  const task = TaskRegistry[nodeData.type];
  return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected} {...props}>
      <NodeHeader taskType={task.type} />
      <div className="flex justify-start relative p-3 bg-secondary w-full">
        {task.inputs.map((input) => (
          <NodeInput key={input.name} input={input} />
        ))}
      </div>
    </NodeCard>
  );
});

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";
