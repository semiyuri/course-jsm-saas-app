"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

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

      <SignedOut>
        <SignInButton>
          <button className="btn-signin">Sign In</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default NavItems;
