import Navbar from "@/components/layout/Navbar";
import HeroSlider from "@/components/UI/HeroSlider";
import TabsComponent from "@/components/UI/TabsComponent";
import img1 from "@/assets/images/Group.png";
import img2 from "@/assets/images/image1.png";
import img3 from "@/assets/images/image2.png";

export default function page() {
  interface Slide {
    title: string;
    desc: string;
    image: any;
  }
  const slides1: Slide[] = [
    {
      title: "Launch Portfolio For Underlying Digital Assets",
      desc: "A unified platform to organize, manage, and showcase your on-chain asset portfolio.",
      image: img1,
    },
    {
      title: "Manage Your Digital Identity Easily",
      desc: "Secure and scalable domain management system.",
      image: img2,
    },
    {
      title: "Buy & Sell Domains Seamlessly",
      desc: "Explore marketplace and premium domains.",
      image: img3,
    },
  ];
  const slides2: Slide[] = [
    {
      title: "Launch Portfolio For Underlying Digital Assets",
      desc: "A unified platform to organize, manage, and showcase your on-chain asset portfolio.",
      image: img2,

    },
    {
      title: "Manage Your Digital Identity Easily",
      desc: "Secure and scalable domain management system.",
      image: img1,

    },
    {
      title: "Buy & Sell Domains Seamlessly",
      desc: "Explore marketplace and premium domains.",
      image: img2,
    },
  ];
  const slides3: Slide[] = [
    {
      title: "Launch Portfolio For Underlying Digital Assets",
      desc: "A unified platform to organize, manage, and showcase your on-chain asset portfolio.",
      image: img3,
    },
    {
      title: "Manage Your Digital Identity Easily",
      desc: "Secure and scalable domain management system.",
      image: img2,
    },
    {
      title: "Buy & Sell Domains Seamlessly",
      desc: "Explore marketplace and premium domains.",
      image: img3,
    },
  ];
  return (
    <>
      <Navbar />
      <HeroSlider data={slides1} version={1} />
      <TabsComponent />
      <HeroSlider data={slides2} version={2} />
      <HeroSlider data={slides3} version={3} />
    </>
  );
}