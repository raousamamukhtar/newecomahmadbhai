import BASE_PATH_FORAPI from "@/components/shared/Wrapper/BasePath";
import Hero from "@/components/views/Hero";
import ProductCarousel from "@/components/views/ProductCarousel";
import PromotionSection from "@/components/views/PromotionSection";

async function fetAllProductData(){
  // let res = await fetch(`${BASE_PATH_FORAPI}/api/products`);

  // if (!res.ok){
  //   throw new Error("Failed to fetch")
  // }

  // return res.json();
  return {response : "Hi"}
}

export default async function Home() {
  let {response} = await fetAllProductData();
  return (
   <div>
    <Hero />
    <PromotionSection />
    <ProductCarousel ProductData={response} />
   </div>
  )
}
