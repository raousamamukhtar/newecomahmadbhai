
import SwipperSlidder from "@/components/shared/SwipperSlider";
import FeactureSection from "@/components/views/FeatureSection";
import Hero from "@/components/views/Hero";
import NewsLetter from "@/components/views/NewsLetter";
import PromotionSection from "@/components/views/PromotionSection";



export default async function Home() {
  return (
   <main>
    <Hero />
    <PromotionSection />
    <SwipperSlidder />
    <FeactureSection />
    <NewsLetter />
   </main>
  ) 
}
