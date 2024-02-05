"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Layout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname !== "/login/loginteacher" ? (
        <h1>layout for all login component</h1>
      ) : (
        <Link href="/">GO to home page</Link>
      )}
      {children}
    </div>
  );
}

export default Layout;
