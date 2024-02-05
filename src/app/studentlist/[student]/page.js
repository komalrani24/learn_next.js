"use client";
import React from "react";

const Student = ({ params }) => {
  console.log(params);
  return (
    <div>
      student Detail<br></br>
      {params.student}
    </div>
  );
};

export default Student;
