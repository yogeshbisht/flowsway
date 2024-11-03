"use server";

import prisma from "@/lib/prisma";
import {
  createWorkflowSchema,
  type CreateWorkflowSchemaType
} from "@/schema/workflow";
import { WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
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

export { getUserWorkflows, createWorkflow };
