import waitFor from "@/lib/helper/wait-for";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Editor from "../../_components/editor";

const WorkflowEditorPage = async ({
  params
}: {
  params: { workflowId: string };
}) => {
  const { workflowId } = await params;
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  await waitFor(500);

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: workflowId,
      userId
    }
  });

  if (!workflow) {
    redirect("/workflows");
  }

  return <Editor workflow={workflow} />;
};

export default WorkflowEditorPage;
