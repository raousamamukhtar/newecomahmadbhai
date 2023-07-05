import Image from "next/image";
import React from "react";
import img1 from "@/components/assets/images/event1.webp";
import img2 from "@/components/assets/images/event2.webp";
import img3 from "@/components/assets/images/event3.webp";

const PromotionSection = () => {
  return (
    
    <div className=" py-16 space-y-10">
      <div className="text-center">
        <span className="text-[#007aff] font-bold text-sm ">PROMOTIONS</span>
        <h2 className="text-3xl font-semibold mt-4 flex flex-col">
          Our Promotions Events
        </h2>
      </div>
      <div className="lg:flex gap-6">
        {/* lef and right boxex  */}
        <div>
          {/* left box with one column and two rows */}
          <div className="space-y-4">
            <div className="flex bg-[#d6d6d8] justify-center items-center px-8 ">
              <div>
                <h3 className="font-bold text-3xl">
                  GET UP TO <strong>60%</strong>
                </h3>
                <p className="text-lg leading-6 w-40 tracking-wider">
                  For the summer season
                </p>
              </div>
              <div>
                <Image src={img1} alt="img" />
              </div>
            </div>
            <div className="bg-[#212121] text-white flex flex-col items-center p-8 ">
              <h3 className="text-4xl font-extrabold py-4">GET 30% Off</h3>
              <p>USE PROMO CODE</p>
              <button className="bg-[#474747] rounded-xl py-2 px-9 font-bold text-lg mt-1 tracking-[4px]">
                DINEWEEKENDSALE
              </button>
            </div>
          </div>
        </div>
        {/* right bos with two column and one row */}
        <div className=" flex flex-col items-center md:grid md:grid-cols-2 md:content-between lg:mt-0 mt-5 gap-4">
          <div className="bg-[#efe1c7]">
            <div className="ml-5 py-2">
              <p className="mt-5 ">Flex Sweatshirt</p>
              <div>
                <span>
                  <s>$100.00</s>
                </span>
                <span>
                  <strong>%75.00</strong>
                </span>
              </div>
            </div>
            <div>
              <Image src={img2} alt="img" />
            </div>
          </div>
          <div className="bg-[#d7d7d9]">
            <div className="ml-5">
              <p className="mt-5 py-1">Flex Push Button Bomber</p>
              <div>
                <span>
                  <s>$225.00</s>
                </span>
                <span>
                  <strong>%190.00</strong>
                </span>
              </div>
            </div>
            <div>
              <Image src={img3} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionSection