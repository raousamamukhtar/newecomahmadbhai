import React from "react";

const NewsLetter = () => {
  return (
    <section className="flex flex-col justify-center items-center my-40">
      <div className="absolute text-[6.875rem] font-bold text-gray-200 -z-10 tracking-widest">
        Newsletter
      </div>
      <h2 className="text-4xl font-bold tracking-wider ">
        Subscribe Our Newsletter
      </h2>
      <p className="text-base font-normal tracking-wide mt-6">
        Get the latest information and promo offers directly
      </p>
      <form className="flex gap-4 w-[462px] mt-6" action="#">
        <input className="border border-black text-sm w-60 indent-2" placeholder="Input email address"></input>
        <button className="bg-[#212121]  text-white text-sm px-5 py-2 ring-2 ring-slate-700">
          Get Started
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
