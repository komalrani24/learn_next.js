"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const envVar = process.env.NODE_ENV;
  console.log(process.env.NODE_ENV);
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {envVar == "development" ? (
        <h1>development mode</h1>
      ) : (
        <h1>Production mode</h1>
      )}
      <h1>Hello</h1>
      <Link href="/login">Go to login page</Link>
      <br />
      <br />
      <Link href="/about">Go to about page</Link>
      <br />
      <br />
      <button onClick={() => router.push("/login")}>Click me</button>
      <br />
      <br />
      <button onClick={() => router.push("/productlist")}>
        Go to Product Page
      </button>
      <br />
      <br />
      <button onClick={() => router.push("/serverproductlist")}>
        Go to Server Product Page
      </button>
    </main>
  );
}
