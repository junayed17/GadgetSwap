import BrowseByCategory from "./components/BrowseByCategory";
import Hero from "./components/Hero";
import SellerStories from "./components/SellerStories";
import StepsToSwap from "./components/StepsToSwap";
import Tranding from "./components/Tranding";
import WhySwap from "./components/WhySwap";

export default function Home() {
  return (
    <>
      <Hero />
      <Tranding/>
      <WhySwap/>
      <StepsToSwap/>
      <BrowseByCategory/>
      <SellerStories/>
    </>
  );
}
