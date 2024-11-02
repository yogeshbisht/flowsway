"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  CoinsIcon,
  HomeIcon,
  ShieldCheckIcon,
  WorkflowIcon
} from "lucide-react";
import BrandLogo from "./brand-logo";
import { usePathname } from "next/navigation";

const routes = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon
  },
  {
    href: "/workflows",
    label: "Workflows",
    icon: WorkflowIcon
  },
  {
    href: "/credentials",
    label: "Credentials",
    icon: ShieldCheckIcon
  },
  {
    href: "/billing",
    label: "Billing",
    icon: CoinsIcon
  }
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  const activeRoute =
    routes.find((route) => route.href === pathname) || routes[0];

  return (
    <div className="hidden relative md:block w-[280px] h-screen overflow-hidden bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
        <BrandLogo />
      </div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-2 py-2 px-4 rounded-md hover:bg-primary/10",
              route.href === activeRoute.href && "bg-primary/10"
            )}
          >
            <route.icon className="size-4" />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardSidebar;
