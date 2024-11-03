import React, { Suspense } from "react";
import UserWorkflows from "./_components/user-workflow";

const WorkflowPage = () => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Workflows</h1>
          <p className="text-sm text-muted-foreground">
            Create and manage your workflows
          </p>
        </div>
      </div>

      <div className="h-full py-6">
        <Suspense fallback={<div>Loading...</div>}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
};

export default WorkflowPage;
