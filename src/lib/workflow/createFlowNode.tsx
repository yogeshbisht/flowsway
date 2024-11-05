import { AppNode, TaskType } from "@/types/app-node";

export const createFlowNode = (
  nodeType: TaskType,
  position?: { x: number; y: number }
): AppNode => {
  return {
    id: crypto.randomUUID(),
    type: "FlowSwayNode",
    dragHandle: ".drag-handle",
    data: {
      type: nodeType,
      inputs: []
    },
    position: position ?? { x: 100, y: 100 }
  };
};
