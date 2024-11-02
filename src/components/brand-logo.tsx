import { SquareArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BrandLogo = () => {
  return (
    <Link className="flex items-center gap-2" href="/">
      <SquareArrowRight className="size-6" />
      <h1 className="text-xl font-bold">flowsway.</h1>
    </Link>
  );
};

export default BrandLogo;
