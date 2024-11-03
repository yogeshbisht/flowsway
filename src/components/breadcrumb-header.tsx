"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "./ui/breadcrumb";
import { MobileSidebar } from "./sidebar";

const BreadcrumbHeader = () => {
  const pathname = usePathname();

  const pathParts = pathname === "/" ? [""] : pathname.split("/");

  return (
    <div className="flex items-center">
      <MobileSidebar />
      <Breadcrumb>
        <BreadcrumbList>
          {pathParts.map((part, index) => (
            <React.Fragment key={part}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={part === "" ? "/" : `/${part}`}
                  className="capitalize"
                >
                  {part === "" ? "home" : part}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index !== pathParts.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;
