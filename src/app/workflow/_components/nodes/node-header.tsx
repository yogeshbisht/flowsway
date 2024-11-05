"use client";

import React from "react";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { TaskType } from "@/types/app-node";
import { Badge } from "@/components/ui/badge";
import { CoinsIcon, GripVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const NodeHeader = ({ taskType }: { taskType: TaskType }) => {
  const task = TaskRegistry[taskType];

  return (
    <div className="flex items-center gap-2 p-2">
      {task.icon && <task.icon size={16} />}
      <div className="flex justify-between items-center w-full">
        <p className="text-xs font-bold uppercase text-muted-foreground">
          {task.label}
        </p>
        <div className=" flex gap-1 items-center">
          {task.isEntryPoint && <Badge variant="outline">Entry Point</Badge>}
          <Badge className="gap-2 flex items-center text-xs">
            <CoinsIcon size={12} />
            TODO
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="drag-handle cursor-grab"
          >
            <GripVerticalIcon size={12} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NodeHeader;
