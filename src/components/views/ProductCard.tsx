import Image ,{ StaticImageData} from 'next/image'
import React from 'react'


export default function ProductCard(props:{img: StaticImageData ,title:string ,price:number}) {
  return (
    <div className='hover:scale-110 transform'>
        <Image src={props.img} alt='Image' />
        <h3 className='font-semibold text-lg tracking-wider pt-2'>{props.title}</h3>
        <p className='font-semibold text-lg'>${props.price}</p>
    </div>
  )
}
