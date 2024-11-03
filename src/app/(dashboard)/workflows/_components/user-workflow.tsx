import Link from "next/link";
import { getUserWorkflows } from "@/actions/workflows";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, CirclePlus, ShieldAlert } from "lucide-react";

const UserWorkflows = async () => {
  const workflows = await getUserWorkflows();
  console.log(workflows);

  if (!workflows) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          You don&apos;t have any workflows yet.
        </AlertDescription>
      </Alert>
    );
  }

  if (workflows.length === 0) {
    return (
      <div className="flex flex-col items-center h-full min-h-96 justify-center gap-4">
        <ShieldAlert className="size-20 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          You don&apos;t have any workflows yet.
        </p>
        <Link href="/workflows/create">
          <Button className="w-fit text-base mt-4">
            <CirclePlus className="size-4 mr-1" />
            Create Workflow
          </Button>
        </Link>
      </div>
    );
  }

  return <div>UserWorkflows</div>;
};

export default UserWorkflows;
