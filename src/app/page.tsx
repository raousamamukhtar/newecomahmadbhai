import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";
import { responseType } from "@/components/utils/ProductsDataArrayAndType";
import FeactureSection from "@/components/views/FeatureSection";
import Hero from "@/components/views/Hero";
import NewsLetter from "@/components/views/NewsLetter";
import PromotionSection from "@/components/views/PromotionSection";
import SliderSection from "@/components/views/SliderSection";
import { client } from "sanity/lib/client";

// async function fetAllProductData(){
//   let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`);

//   if (!res.ok){
//     throw new Error("Failed to fetch")
//   }

//   return res.json();
  
// }

export default async function Home() {
  // let {result} :responseType = await fetAllProductData();
  return (
   <div>
    <Hero />
    <PromotionSection />
    <SliderSection />
    <FeactureSection />
    <NewsLetter />
   </div>
  ) 
}
