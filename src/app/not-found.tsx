import React from "react";
import Link from "next/link";
import BrandLogo from "@/components/brand-logo";
import { ArrowLeftIcon, OctagonXIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <BrandLogo />
      <Separator className="max-w-xs mb-20 mt-2" />
      <div className="flex flex-col items-center gap-4">
        <OctagonXIcon className="size-20" />
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <span>Page Not Found</span>
        </h1>
        <p className="text-lg">{`The page you are looking for does not exist.`}</p>
        <Button asChild className="my-4">
          <Link href="/">
            <ArrowLeftIcon className="size-4 mr-1" />
            Back to Dashboard
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
