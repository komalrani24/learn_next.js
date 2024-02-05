"use client";
import React from "react";

const Lecture = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1>No of day of college={params.lecture[0]}</h1>
      <h1>lecture no={params.lecture[1]}</h1>
    </div>
  );
};

export default Lecture;
