import { cn } from "@/lib/utils";
import Link from "next/link";
import { formatDistance } from "date-fns";
import { FileTextIcon, PlayIcon } from "lucide-react";
import { Workflow } from "@prisma/client";
import { WorkflowStatus } from "@/types/workflow";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import WorkflowActions from "./workflow-actions";
import { Button } from "@/components/ui/button";

type WorkflowCardProps = {
  hideArchived?: boolean;
  workflow: Workflow;
};

const statusColors = {
  [WorkflowStatus.DRAFT]: "bg-yellow-300 text-yellow-700",
  [WorkflowStatus.ARCHIVED]: "bg-gray-300 text-gray-700",
  [WorkflowStatus.PUBLISHED]: "bg-green-300 text-green-700"
};

const formatDistanceToNow = (date: Date) => {
  return formatDistance(date, new Date(), { addSuffix: true });
};

const WorkflowCard = ({
  workflow,
  hideArchived = false
}: WorkflowCardProps) => {
  const isDraft = workflow.status === WorkflowStatus.DRAFT;
  const isArchived = workflow.status === WorkflowStatus.ARCHIVED;

  if (hideArchived && isArchived) {
    return null;
  }

  return (
    <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 dark:shadow-primary/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className={cn(
                "size-10 rounded-full flex items-center justify-center",
                statusColors[workflow.status as WorkflowStatus]
              )}
            >
              {isDraft ? (
                <FileTextIcon className="size-4" />
              ) : (
                <PlayIcon className="size-4" />
              )}
            </div>
            <div className="text-muted-foreground">
              <Link
                href={`/workflows/${workflow.id}`}
                className="flex items-center hover:underline text-muted-foreground"
              >
                {workflow.name}
              </Link>
            </div>
            <div
              className={cn(
                "text-[10px] px-2 py-1 rounded-full",
                statusColors[workflow.status as WorkflowStatus]
              )}
            >
              {workflow.status}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/workflow/editor/${workflow.id}`}>
              <Button variant="outline">Edit</Button>
            </Link>
            <WorkflowActions workflow={workflow} />
          </div>
        </CardTitle>
        <CardDescription>
          {`Last updated ${formatDistanceToNow(workflow.updatedAt)}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4 px-6 flex items-center justify-between h-[100px]"></CardContent>
    </Card>
  );
};

export default WorkflowCard;
