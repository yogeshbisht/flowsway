"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { NodeProps, useReactFlow } from "@xyflow/react";

type NodeCardProps = NodeProps & {
  nodeId: string;
  children: React.ReactNode;
  isSelected: boolean;
};

const NodeCard = ({ nodeId, children, isSelected }: NodeCardProps) => {
  const { getNode, setCenter } = useReactFlow();
  const node = getNode(nodeId);

  const onDoubleClick = () => {
    if (!node) return;

    const { position, measured } = node;
    if (!position || !measured) return;

    const { width, height } = measured;
    if (!width || !height) return;

    const { x, y } = position;
    if (!x || !y) return;

    setCenter(x + width / 2, y + height / 2, {
      zoom: 1,
      duration: 500
    });
    console.log("double clicked", width, height);
  };

  return (
    <div
      onDoubleClick={onDoubleClick}
      className={cn(
        "bg-background border-2 border-separate w-[420px] text-xs gap-1 rounded-lg flex flex-col",
        isSelected && "border-primary"
      )}
    >
      <div className="text-xs flex justify-end py-1 px-2">{nodeId}</div>
      {children}
    </div>
  );
};

export default NodeCard;
