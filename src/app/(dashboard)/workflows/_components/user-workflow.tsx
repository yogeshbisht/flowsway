import { getUserWorkflows } from "@/actions/workflows";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ShieldAlert } from "lucide-react";
import CreateWorkflowDialog from "./dialogs/create-workflow-dialog";
import WorkflowCard from "./workflow-card";
const UserWorkflows = async () => {
  const workflows = await getUserWorkflows();

  if (!workflows) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong while fetching your workflows.
        </AlertDescription>
      </Alert>
    );
  }

  if (workflows.length === 0) {
    return (
      <div className="flex flex-col items-center h-full min-h-96 justify-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <ShieldAlert className="size-20 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            You don&apos;t have any workflows yet.
          </p>
        </div>
        <CreateWorkflowDialog triggerText="Create Workflow" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {workflows.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} />
      ))}
    </div>
  );
};

export default UserWorkflows;
