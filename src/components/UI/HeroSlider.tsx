"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

interface Slide {
  title: string;
  desc: string;
  image: any;
}

interface Props {
  data: Slide[];
  version?: number;
}


const HeroSlider = ({ data, version }: Props) => {
  return (
    <div className={`hero-wrapper-version${version}`}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={false}
        loop
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="hero">

              {/* LEFT CONTENT  */}
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
              </div>

              {/* RIGHT IMAGE  */}
              <div className="hero-image">
                <Image
                  src={slide.image}
                  alt="slide"
                  fill
                  className="hero-img"
                />
              </div>

            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;