import React from 'react'
import FetchData from '../../../../sanity/FetchData';

export default async function page({params}: {params:any}) {
  console.log("params", params);
  const data = await FetchData();
  const filteredData = data.find(
    (item:any) => 
    // console.log("item", item)
    item.slug.current
    );
  console.log("params", filteredData);
  
  return (
    <div>{filteredData.productName}</div>
  )
}
