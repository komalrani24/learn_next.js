"use client";
import Script from "next/script";

const Location = () => {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file Load");
        }}
      />
      <h3>Get location</h3>
    </div>
  );
};

export default Location;
