import React ,{ FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArrayAndType'
import { client } from '../../../sanity/lib/client'
import  imageUrlBuilder  from '@sanity/image-url';
import Image from 'next/image';

const builder = imageUrlBuilder(client)

function urlFor(source:any){
  return builder.image(source)
}

const Card: FC<{singleProductData: oneProductType}> = ({singleProductData}) => {
  return (
    <div className='border-4 max-w-sm space-y-3'>
    <div className='w-full'>
      <Image width={500} height={500} src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} alt='img'  />
    </div>
    <div className='space-y-2 text-gray-800 font-bold text-lg'>
      <h6>{singleProductData.productName}</h6>
      <p>{singleProductData.price}</p> 
    </div>
    </div>
  )
}

export default Card