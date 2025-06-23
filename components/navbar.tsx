import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./nav-items";

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-100">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
        </div>
      </Link>

      <NavItems />
    </nav>
  );
};

export default Navbar;
