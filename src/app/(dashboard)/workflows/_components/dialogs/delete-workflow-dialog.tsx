"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

type DeleteWorkflowDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onDelete: () => void;
  workflowName: string;
};

const DeleteWorkflowDialog = ({
  open,
  setOpen,
  onDelete,
  workflowName
}: DeleteWorkflowDialogProps) => {
  const [confirmText, setConfirmText] = useState("");

  const onConfirmDelete = () => {
    if (confirmText !== workflowName) {
      return;
    }
    onDelete();
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to continue?</AlertDialogTitle>
          <AlertDialogDescription>
            If you delete this workflow, it will be permanently removed from our
            servers. There will be no way to recover it.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-2 py-4">
          <p className="text-sm text-muted-foreground">
            If you are sure, enter <b className="text-white">{workflowName}</b>{" "}
            below and press Delete to confirm.
          </p>
          <Input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="px-12">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="text-white bg-destructive hover:bg-destructive/80 px-12"
            disabled={confirmText !== workflowName}
            onClick={onConfirmDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteWorkflowDialog;
