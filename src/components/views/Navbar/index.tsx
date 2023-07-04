"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/Ri";
import { IoMdClose } from "react-icons/Io";
import { CgShoppingCart } from "react-icons/Cg";
import { CiSearch } from "react-icons/Ci";

import Logo from "/public/logo.png";
import MobileNavbar from "@/components/views/Navbar/subComponents/MobileNavbar";
import {
  NavbarArray,
  NavbarItemType,
} from "@/components/utils/NavbarArrayAndTypes";

export const Navbar = () => {
  const [IsNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [cartItemNumber, setcartItemNumber] = useState<number>(0)
  return (
    <div>
      <div className="py-2 flex justify-between items-center gap-8 ">
        <div>
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="hidden lg:flex justify-between items-center w-full ">
          <ul className="flex space-x-10 font-medium">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center border rounded text-gray-600 px-2 ">
            <CiSearch />
            <input
              className="px-2 focus:outline-none"
              type="text"
              placeholder="What are you looking for"
            />
          </div>
          <div className="relative bg-slate-200 cursor-pointer rounded-full ">
            <div className="absolute top-1 right-2 px-1 text-xs bg-red-500 rounded-full">
              {cartItemNumber}
            </div>
            <CgShoppingCart className="m-3" size={20} />
          </div>
        </div>
        <div onClick={() => setNavbarOpen(!IsNavbarOpen)}>
          {IsNavbarOpen ? (
            <div className="flex lg:hidden">
              <IoMdClose size={25} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <RiMenu3Line size={25} />
            </div>
          )}
        </div>
      </div>
      {IsNavbarOpen && <MobileNavbar />}
    </div>
  );
};

export default Navbar;
