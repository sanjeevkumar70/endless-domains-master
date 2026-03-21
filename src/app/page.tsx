import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/ui/HeroSlider";
import HeroSlider2 from "@/components/UI/HeroSlider2";
import HeroSlider3 from "@/components/UI/HeroSlider3";
import TabsComponent from "@/components/UI/TabsComponent";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <TabsComponent/>
      {/* <HeroSlider2 />
      <HeroSlider3 /> */}
    </>
  );
}