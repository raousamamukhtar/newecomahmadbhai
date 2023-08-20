import React from 'react'
import FetchData from '../../../../sanity/FetchData';

export async function generateStaticParams(){
  const data = await FetchData();
return data.map((item:any) =>{
  product: item.slug.current 
})
}

export default async function page({params}: {params:any}) {
  console.log("params", params.product);
  const data = await FetchData();
  const filteredData = data.find((item : any) => item.slug.current == params.product)
  console.log("params", filteredData);
  
  return (
    <div>{filteredData?.productName}</div>
  )
}
