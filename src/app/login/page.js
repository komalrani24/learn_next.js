import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/">back to home page</Link>
      <br></br>
      <Link href="login/loginteacher">Teacher</Link>
      <br></br>
      <Link href="login/loginstudent">student</Link>
      <br></br>
    </div>
  );
};

export default page;
