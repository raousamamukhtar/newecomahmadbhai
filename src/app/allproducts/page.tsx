"use client";
import React from "react";
import FetchData from "../../../sanity/FetchData";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";



export default async function page() {
  const data = await FetchData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4 pt-10 md:py-20 ">
        {data.map((product: any) => (
          <Link key={product._id} href={`product/${product.slug.current}`}>
            <Image
            width={400}
            height={400}
              src={urlForImage(product.image[0]).url()}
              alt="pic"
            />
            <h1 className="font-semibold text-lg tracking-wider pt-2">
              {product.productName}
            </h1>
            <p className="font-semibold text-lg">{product.price}</p>
          </Link>
        ))}
    </div>
  );
}
