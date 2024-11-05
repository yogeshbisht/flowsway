export enum TaskType {
  LAUNCH_BROWSER = "LAUNCH_BROWSER",
  NAVIGATE_TO = "NAVIGATE_TO",
  CLICK = "CLICK",
  TYPE = "TYPE",
  WAIT = "WAIT"
}
export enum TaskParamType {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean"
}

export type TaskInput = {
  name: string;
  type: TaskParamType;
  helperText?: string;
  required?: boolean;
  hideHandle?: boolean;
  [key: string]: any;
};
