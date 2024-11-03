import React from "react";
import { LucideIcon } from "lucide-react";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

type CustomDialogHeaderProps = {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const CustomDialogHeader = ({
  icon: Icon,
  title,
  subtitle,
  iconClassName,
  titleClassName,
  subtitleClassName
}: CustomDialogHeaderProps) => {
  return (
    <DialogHeader className="py-6">
      <div className="flex flex-col items-center gap-3">
        {Icon && <Icon className={cn("stroke-primary", iconClassName)} />}
        <DialogTitle className={titleClassName}>{title}</DialogTitle>
        <DialogDescription className={subtitleClassName}>
          {subtitle}
        </DialogDescription>
        <Separator />
      </div>
    </DialogHeader>
  );
};

export default CustomDialogHeader;
