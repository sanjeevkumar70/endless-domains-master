"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";

import img1 from "@/assets/images/image1.png";
import img2 from "@/assets/images/Group.png";
import img3 from "@/assets/images/Group.png";

interface Slide {
  title: string;
  desc: string;
  image: any;
}

const slides: Slide[] = [
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

const HeroSlider2 = () => {
  return (
    <div className="hero-wrapper">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-container2">

              {/* LEFT CONTENT */}
              <div className="hero-left">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hero-right">
                <Image
                  src={slide.image}
                  alt="slide"
                  fill
                  className="hero-img"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider2;