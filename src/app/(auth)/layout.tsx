import BrandLogo from "@/components/brand-logo";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-6">
        <BrandLogo />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
