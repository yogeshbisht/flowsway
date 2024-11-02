import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/brand-logo";
import { OctagonXIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <BrandLogo />
      <Separator className="max-w-xs mb-20 mt-2" />
      <div className="flex flex-col items-center gap-4">
        <OctagonXIcon className="size-20" />
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <span>Not Found</span>
        </h1>
        <p className="text-lg">The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 underline">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
