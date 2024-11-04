"use client";

import { useState } from "react";
import { MoreVerticalIcon, TrashIcon } from "lucide-react";
import { Workflow } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import DeleteWorkflowDialog from "./dialogs/delete-workflow-dialog";
import { deleteWorkflow } from "@/actions/workflows";
import { toast } from "sonner";

type WorkflowActionsProps = {
  workflow: Workflow;
};

const WorkflowActions = ({ workflow }: WorkflowActionsProps) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: deleteWorkflow,
    onSuccess: () => {
      toast.success("Workflow deleted successfully", { id: workflow.id });
    },
    onError: () => {
      toast.error("Failed to delete workflow", { id: workflow.id });
    }
  });

  const handleDelete = async () => {
    toast.loading("Deleting workflow...", { id: workflow.id });
    deleteMutation.mutate(workflow.id);
    setShowDeleteDialog(false);
  };

  return (
    <>
      <DeleteWorkflowDialog
        open={showDeleteDialog}
        setOpen={setShowDeleteDialog}
        onDelete={handleDelete}
        workflowName={workflow.name}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MoreVerticalIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setShowDeleteDialog((prev) => !prev)}
          >
            <TrashIcon className="size-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default WorkflowActions;
