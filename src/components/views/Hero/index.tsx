import React from "react";
import { CgShoppingCart } from "react-icons/Cg";
import Image from "next/image";
import bazarLogo from "@/components/assets/Images/bazaar.webp"
import buslteLogo from "@/components/assets/Images/bustle.webp";
import versaceLogo from "@/components/assets/Images/versace.webp";
import instyleLogo from "@/components/assets/Images/instyle.webp";
import heroImage from "@/components/assets/Images/hero-image.webp";

const Hero = () => {
    const btnText = "Start \n Shopping"
  return (
    <div className=" flex flex-col lg:flex-row pt-10 gap-16">
      {/* left box start here */}
      <div className="flex flex-col space-y-10  mx-12 lg:mx-0 lg:flex-1">
        <p>
          <span className="px-5 py-2 bg-[#e1edff] text-[blue] rounded-[5px] font-semibold">
            Sale 70%
          </span>
        </p>
        <h1 className="font-bold text-gray-900 text-6xl mt-10">
          An Industrial Take on Streetwear
        </h1>
        <p className="text-[#666]">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <div>
          <button className="flex items-center  bg-[#212121] text-white text-lg px-5 py-4 ring-2 ring-slate-700">
            <CgShoppingCart size={20} className="mr-2" />
           <p className="whitespace-pre leading-5 font-medium">{btnText}</p>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6 md:flex">
          <Image src={bazarLogo} alt="bazar logo" />
          <Image src={buslteLogo} alt="buslte logo" />
          <Image src={versaceLogo} alt="versace logo" />
          <Image src={instyleLogo} alt="instyle logo" />
        </div>
      </div>
      {/* right box(image box) start here */}
      <div className="bg-[#efe1c7] rounded-full hidden lg:flex ">
        <Image className="-mt-8" src={heroImage} alt="Hero section image" />
      </div>
    </div>
  )
}

export default Hero