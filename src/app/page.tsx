import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/UI/HeroSlider";
import HeroSlider2 from "@/components/UI/HeroSlider2";
import TabsComponent from "@/components/UI/TabsComponent";

export default function page() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <TabsComponent />
      <HeroSlider2 />
    </>
  );
}