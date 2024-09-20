/** @format */
"use client";

import Navbar from "./components/header/Navbar";

export default function Page() {
  return (
    <>
      <div className="w-full">
        <div className=" min-w-[100%] flex justify-center">
          <Navbar />
        </div>
      </div>
    </>
  );
}
