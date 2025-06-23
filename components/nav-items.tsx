"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4">
      {navItems.map((navItem) => (
        <Link
          key={navItem.name}
          href={navItem.href}
          className={cn(
            pathname === navItem.href && "text-primary font-semibold",
          )}
        >
          {navItem.name}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
