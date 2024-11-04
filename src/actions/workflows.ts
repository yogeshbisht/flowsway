"use server";

import prisma from "@/lib/prisma";
import {
  createWorkflowSchema,
  type CreateWorkflowSchemaType
} from "@/schema/workflow";
import { WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const getUserWorkflows = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("unauthorized");
  }

  return prisma.workflow.findMany({
    where: {
      userId
    },
    orderBy: {
      createdAt: "asc"
    }
  });
};

const createWorkflow = async (formData: CreateWorkflowSchemaType) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("unauthorized");
  }

  const { success, data } = createWorkflowSchema.safeParse(formData);

  console.log(success, "success", data, "data");
  if (!success) {
    throw new Error("invalid form data");
  }

  const result = await prisma.workflow.create({
    data: {
      userId,
      definition: "TODO",
      status: WorkflowStatus.DRAFT,
      ...data
    }
  });

  if (!result) {
    throw new Error("failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
};

const deleteWorkflow = async (workflowId: string) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("unauthorized");
  }

  const result = await prisma.workflow.delete({
    where: {
      id: workflowId,
      userId
    }
  });

  if (!result) {
    throw new Error("failed to delete workflow");
  }

  revalidatePath("/workflows");
};

export { getUserWorkflows, createWorkflow, deleteWorkflow };
