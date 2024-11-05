import { memo } from "react";
import { NodeProps } from "@xyflow/react";
import NodeCard from "./node-card";
import NodeHeader from "./node-header";
import { TaskType } from "@/types/app-node";

const NodeComponent = memo((props: NodeProps) => {
  return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected} {...props}>
      <NodeHeader taskType={props.data.type as TaskType} />
    </NodeCard>
  );
});

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";
