import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "/public/logo.png";


export default function Footer() {
  return (
    <>
      <div className="max-w-[1093px] ml-10 mb-10 mx-auto md:flex md:flex-row md:mx-10 lg:mx-auto justify-between md:flex-wrap md:gap-10">
        <div>
          <Image
            className="mb-6"
            src={Logo}
            alt="Logo"
          />
          <p className="mb-6 max-w-xs text-slate-500 md:pr-6">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-2 mb-6 ">
            <div className=" bg-slate-200 cursor-pointer rounded-xl">
              <BsTwitter className="m-2" />{" "}
            </div>
            <div className=" bg-slate-200 cursor-pointer rounded-xl">
              <FaFacebookF className="m-2" />
            </div>
            <div className=" bg-slate-200 cursor-pointer rounded-xl">
              <FaLinkedinIn className="m-2" />
            </div>
          </div>
        </div>
        
          <div>
            <h3 className=" font-bold text-xl text-slate-600 ">Company</h3>
            <ul className="mt-4 space-y-3  text-slate-500">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Terms Of Use</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">How it Works</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="my-6 md:my-0 ">
            <h3 className=" font-bold text-xl text-slate-600 ">Support</h3>
            <ul className="mt-4 space-y-3  text-slate-500">
              <li>
                <Link href="/">Support Career</Link>
              </li>
              <li>
                <Link href="/">24th Service</Link>
              </li>
              <li>
                <Link href="/">Quick Chat</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" font-bold text-xl text-slate-600 ">Contact</h3>
            <ul className="mt-4 space-y-3  text-slate-500">
              <li>
                <Link href="/">Whatsapp</Link>
              </li>
              <li>
                <Link href="/">Support 24h</Link>
              </li>
            </ul>
          </div>
      
      </div>
      <div className=" border-t-[1px] border-black ">{/* breake line */}</div>
      <div className=" px-20 py-6 space-y-4  md:flex justify-between md:space-y-0">
        <p>Copyright © 2023 Dine Market</p>
        <p>
          Design by. <strong>Weird Design Studio</strong>
        </p>
        <p>
          Code by.{" "}
          <strong>
            <Link href="https://github.com/AHMADBILAL13">AHMADBILAL13</Link> on
            Github
          </strong>
        </p>
      </div>
    </>
  );
}
