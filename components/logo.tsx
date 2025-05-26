import React from "react";
import Image from "next/image";
import logo from "@/app/favicon.ico";
export const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={32}
      height={32}
      priority
      className="cursor-pointer"
    />
  );
};
