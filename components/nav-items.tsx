"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";

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
          <Button className="cursor-pointer">Sign In</Button>
        </SignInButton>

        <SignUpButton>
          <Button className="cursor-pointer" variant="outline">
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default NavItems;
