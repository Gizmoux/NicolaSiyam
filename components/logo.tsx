import React from "react";
import Image from "next/image";
import logo from "@/public/logo.jpg";
export const Logo = () => {
  return (
    <Image
      src={logo}
      alt="NicolaSiyam Agency"
      width={54}
      height={54}
      priority
      className="cursor-pointer w-auto h-auto rounded-full"
    />
  );
};
