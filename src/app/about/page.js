"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About page</h1>
      <Link href="/">back to home page</Link>
      <br />
      <br />
      <button onClick={() => router.push("/about/aboutstudent")}>
        click me
      </button>
      <Link href="/about/aboutcollege">navigate</Link>
    </div>
  );
};

export default page;
