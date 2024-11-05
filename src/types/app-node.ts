import { Node } from "@xyflow/react";

export enum TaskType {
  LAUNCH_BROWSER = "LAUNCH_BROWSER",
  NAVIGATE_TO = "NAVIGATE_TO",
  CLICK = "CLICK",
  TYPE = "TYPE",
  WAIT = "WAIT"
}

export interface AppNodeData {
  type: TaskType;
  inputs: Record<string, any>;
  [key: string]: any;
}

export interface AppNode extends Node<AppNodeData> {
  data: AppNodeData;
}
