import Image from "next/image";
import React from "react";
import FeatureImg from "@/components/assets/Images/feature.webp";

const FeactureSection = () => {
  return (
    <section className="my-20">
    <div className="w-[470px] ml-auto" >
      <h2 className="font-bold text-slate-800 text-5xl ">Unique and Authentic Vintage Designer Jewellery</h2>
    </div>
    <div className="grid grid-cols-2 mt-8">
      {/* left section */}
      <div className="grid grid-cols-2 relative justify-center items-center">
        <div className="absolute text-[6.875rem] font-bold text-gray-200 -z-10 top-3 tracking-wider leading-[110px]">Differnt from others</div>
        <div className="w-[186px]">
          <h3 className="text-lg font-bold text-slate-800">Using Good Quality Materials</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className="w-[186px]">
          <h3 className="text-lg font-bold text-slate-800">100% Handmade Products</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className="w-[186px]">
          <h3 className="text-lg font-bold text-slate-800">Modern Fashion Design</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className="w-[186px]">
          <h3 className="text-lg font-bold text-slate-800">Discount for Bulk Orders</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* right section */}
      <div className="flex justify-center items-center gap-10 ">
        <Image className="w-[300px] h-[350px]" src={FeatureImg} alt="Image" />
        <div>
          <p className="text-lg font-light text-justify leading-7 px-2 ">
            This piece is ethically crafted in our small family-owned workshop
            in Peru with unmatched attention to detail and care. The Natural
            color is the actual natural color of the fiber, undyed and 100%
            traceable.
          </p>
          <button className="bg-[#212121] ml-3 mt-2 text-white text-sm px-5 py-2 ring-2 ring-slate-700">
            See All <br /> Products
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeactureSection