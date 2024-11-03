"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

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

export { getUserWorkflows };
