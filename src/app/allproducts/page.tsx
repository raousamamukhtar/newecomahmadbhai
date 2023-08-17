"use client";
import React from "react";
import FetchData from "../../../sanity/FetchData";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";



export default async function page() {
  const data = await FetchData();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };
  console.log("data", data[0].slug);

  return (
    <div>
      <Carousel responsive={responsive}>
        {data.map((product: any) => (
          <Link key={product._id} href={`product/${product.slug.current}`}>
            <Image
            width={400}
            height={400}
              // className="w-[400px] h-[400px] hover:scale-110 transform"
              src={urlForImage(product.image[0]).url()}
              alt="pic"
            />
            <h1 className="font-semibold text-lg tracking-wider pt-2">
              {product.productName}
            </h1>
            <p className="font-semibold text-lg">{product.price}</p>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
