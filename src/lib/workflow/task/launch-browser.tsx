import { GlobeIcon, LucideProps } from "lucide-react";
import { TaskType, TaskParamType } from "@/types/task";

export const LaunchBrowserTask = {
  type: TaskType.LAUNCH_BROWSER,
  label: "launch browser",
  icon: (props: LucideProps) => (
    <GlobeIcon className="stroke-pink-400" {...props} />
  ),
  isEntryPoint: true,
  inputs: [
    {
      name: "Portfolio URL",
      type: TaskParamType.STRING,
      helper: "The URL of the portfolio to launch >> https://yogeshbisht.com",
      required: true,
      hideHandle: true
    }
  ]
};
