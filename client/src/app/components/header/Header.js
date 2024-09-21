/** @format */

import React from "react";
import Navbar from "./Navbar";
import AccountMenu from "./AccountMenu";

const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <AccountMenu />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
