import { GlobeIcon, LucideProps } from "lucide-react";
import { TaskType } from "@/types/app-node";

export const LaunchBrowserTask = {
  type: TaskType.LAUNCH_BROWSER,
  label: "launch browser",
  icon: (props: LucideProps) => (
    <GlobeIcon className="stroke-pink-400" {...props} />
  ),
  isEntryPoint: true
};
