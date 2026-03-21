import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/UI/HeroSlider";
import TabsComponent from "@/components/UI/TabsComponent";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <TabsComponent />
      {/* <HeroSlider2 />
      <HeroSlider3 /> */}
    </>
  );
}