"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList
} from "./ui/breadcrumb";

const BreadcrumbHeader = () => {
  const pathname = usePathname();

  const pathParts = pathname === "/" ? [""] : pathname.split("/");

  return (
    <div className="flex items-center">
      <Breadcrumb>
        <BreadcrumbList>
          {pathParts.map((part) => (
            <BreadcrumbItem key={part}>
              <BreadcrumbLink href={part} className="capitalize">
                {part === "" ? "home" : part}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;