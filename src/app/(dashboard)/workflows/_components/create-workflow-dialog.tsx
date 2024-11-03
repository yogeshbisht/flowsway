"use client";

import { useEffect, useState } from "react";
import { Layers2Icon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CustomDialogHeader from "@/components/custom-dialog-header";
import {
  createWorkflowSchema,
  type CreateWorkflowSchemaType
} from "@/schema/workflow";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createWorkflow } from "@/actions/workflows";

type CreateWorkflowDialogProps = {
  triggerText: string;
};

const CreateWorkflowDialog = ({ triggerText }: CreateWorkflowDialogProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<CreateWorkflowSchemaType["data"]>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {
      name: "",
      description: ""
    }
  });

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  const { mutate, isPending } = useMutation({
    mutationFn: createWorkflow,
    onSuccess: () => {
      setOpen(false);
    },
    onError: (error) => {
      console.error(error);
    }
  });

  const handleCreateWorkflow = (data: CreateWorkflowSchemaType["data"]) => {
    mutate({ success: true, data });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-fit mt-4">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent>
        <CustomDialogHeader
          icon={Layers2Icon}
          title="Create Workflow"
          subtitle="Create a new workflow to automate your business processes."
        />
        <div className="p-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleCreateWorkflow)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      Name
                      <span className="text-xs text-primary">{` (required)`}</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Choose a descriptive and unique name for your workflow.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      Description
                      <span className="text-xs text-primary">{` (optional)`}</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription>
                      Add a description to help others understand what it does.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex">
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkflowDialog;
