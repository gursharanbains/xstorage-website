"use client";

import { testimonialsData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "../../app/slider.css";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={false}
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="w-full mySwiper"
    >
      {testimonialsData.map((slide, index) => {
        const { image, name, web, message, delay } = slide;
        return (
          <SwiperSlide
            key={index}
            className="bg-white rounded-3xl border border-accent-primary lg:max-w-[450px] xl:max-w-[645px] max-h-[330px] pt-16 px-10 xl:px-16 pb-12 flex items-start gap-7 shadow-xl"
          >
            <Image src={image} alt="avatar" width={80} height={80} />
            <div>
              <div className="text-lg text-primary font-bold">{name}</div>
              <div className="mb-4 text-sm font-semibold text-accent-primary">
                {web}
              </div>
              <div>{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
