import BrandLogo from "@/components/brand-logo";
import ThemeModeToggle from "@/components/theme-mode-toggle";
import { Separator } from "@/components/ui/separator";
import React from "react";

const WorkflowLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      {children}
      <Separator />
      <footer className="flex items-center p-2">
        <BrandLogo />
        <ThemeModeToggle />
      </footer>
    </div>
  );
};

export default WorkflowLayout;
