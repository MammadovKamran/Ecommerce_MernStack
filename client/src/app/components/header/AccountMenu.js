/** @format */

import React from "react";
import DropDowns from "../DropDowns";
import Link from "next/link";

const AccountMenu = () => {
  const dropdownItems = [
    { label: "Edit", href: "#" },
    { label: "Duplicate", href: "#" },
    { label: "Archive", href: "#" },
    { label: "Move", href: "#" },
    { label: "Share", href: "#" },
    { label: "Add to favorites", href: "#" },
    { label: "Delete", href: "#" },
  ];
  return (
    <>
      <div className="flex justify-around items-center max-w-7xl h-11 w-full mx-auto">
        <div className="flex justify-start w-1/2 ">
          <DropDowns items={dropdownItems} buttonText="English" />
          <DropDowns items={dropdownItems} buttonText="USD" />
        </div>
        <div className="flex justify-end items-center w-1/2">
          <Link className="text-sm text-gray-600 pr-5" href="item.href ">
            Help
          </Link>
          <Link className="text-sm text-gray-600 pr-5" href="item.href">
            Join Us
          </Link>
          <Link className="text-sm text-gray-600 pr-5" href="item.href">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccountMenu;
