"use client";
import Link from "next/link";
import {
  NavbarArray,
  NavbarItemType,
} from "../../../utils/NavbarArrayAndTypes";

const MobileNavbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-slate-300">
      {NavbarArray.map((item: NavbarItemType, index: number) => {
        return (
          <li key={index} className="list-none flex-col text-center">
            <Link href={item.href}>{item.label}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default MobileNavbar;
