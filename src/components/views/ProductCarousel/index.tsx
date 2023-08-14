"use client"
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import React, { Component, FC, ReactNode } from "react";
import Card from "../Card";

// const ProductCarousel: FC<{ ProductData: Array<oneProductType> }> = ({ProductData}:any) => {
//   return (
//     <div className="grid">
//       {ProductData.map((item: oneProductType, index: number) => {
//         <Card singleProductData={item} />;
//       })}
//     </div>
//   );
// };

// export default ProductCarousel;

export default class ProductCarousel extends Component<{ProductData: Array<oneProductType>}> {
  render(): ReactNode {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return(
      <Slider {...settings}>
      {/* {this.props.ProductData.map((item: oneProductType, index: number) => {
        <Card singleProductData={item} />;
      })} */}
      </Slider>
    )
  }
}