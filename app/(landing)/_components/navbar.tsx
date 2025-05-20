"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { MountainIcon } from "lucide-react";

const navigation = [
  {
    item: "Accueil",
    id: "#accueil",
  },
  {
    item: "À propos",
    id: "#about",
  },
  {
    item: "Description",
    id: "#description",
  },
  {
    item: "Portfolio",
    id: "#portfolio",
  },
  {
    item: "Contact",
    id: "#contact",
  },
  {
    item: "Prix",
    id: "#price",
  },
];

export const Navbar = () => {
  return (
    <div className="flex items-center justify-center w-full pt-8 select-none">
      <NavigationMenu className="w-full max-w-[1200px] justify-between px-5 py-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" className="flex items-center space-x-2">
              <MountainIcon className="h-6 w-6" />
              <h2 className="text-2xl font-bold">NicolaSiyam Agency</h2>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="flex justify-between items-center font-light space-x-14 text-md">
          {navigation.map((link) => {
            return (
              <div key="item">
                <NavigationMenuItem className="hover:underline cursor-pointer">
                  <a href={link.id}>{link.item}</a>
                </NavigationMenuItem>
              </div>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
