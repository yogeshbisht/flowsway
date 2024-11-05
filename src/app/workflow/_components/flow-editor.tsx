import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState
} from "@xyflow/react";
import { Workflow } from "@prisma/client";
import { TaskType } from "@/types/task";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import NodeComponent from "./nodes/node-component";
import "@xyflow/react/dist/style.css";

const nodeTypes = {
  FlowSwayNode: NodeComponent
};

const snapGrid: [number, number] = [50, 50];

const fitViewOptions = {
  padding: 1
};

const FlowEditor = ({ workflow }: { workflow: Workflow }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    createFlowNode(TaskType.LAUNCH_BROWSER)
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <main className="size-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        snapToGrid
        snapGrid={snapGrid}
        fitViewOptions={fitViewOptions}
        fitView
      >
        <Controls position="top-left" fitViewOptions={fitViewOptions} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
};

export default FlowEditor;
