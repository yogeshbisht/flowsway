import React from "react";
import { Separator } from "@/components/ui/separator";
import DashboardSidebar from "@/components/dashboard-sidebar";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import ThemeModeToggle from "@/components/theme-mode-toggle";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadcrumbHeader />
          <ThemeModeToggle />
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 py-4 container text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
