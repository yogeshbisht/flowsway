"use client";

import { TaskInput, TaskParamType } from "@/types/task";
import StringParam from "./params/string-param";

const NodeParamField = ({ param }: { param: TaskInput }) => {
  switch (param.type) {
    case TaskParamType.STRING:
      return <StringParam param={param} />;
    default:
      return <div>{param.name}</div>;
  }
};

export default NodeParamField;
