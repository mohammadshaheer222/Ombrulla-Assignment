import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import { MdArrowCircleRight, MdArrowCircleLeft } from "react-icons/md";

import { Pagination, Navigation } from "swiper/modules";
import { destination } from "../data";

export default function SwiperCard() {
  return (
    <div className="py-10 px-4 md:px-8 lg:px-32">
      <div className="text-center py-10 lg:text-start">
        <h1 className="text-2xl uppercase text-[#F85E9F] tracking-widest font-semibold">
          Services
        </h1>
        <h3 className="text-xl font-bold tracking-wider">
          Our top value categories for you
        </h3>
      </div>
      <div className="py-12 relative">
        <Swiper
          effect="slide"
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {destination.map((details, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div
                className="bg-white overflow-hidden shadow-sm w-full h-full"
                style={{ borderRadius: "1rem" }}
              >
                <img
                  src={details.image}
                  alt={`Card ${index}`}
                  className="w-full h-96 object-cover bg-center rounded-t-3xl"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2 text-[#F85E9F]">
                    {details.price}
                  </h3>
                  <h3 className="text-xl font-bold mb-2">{details.title}</h3>
                  <p className="text-gray-600">{details.place}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 left-0 w-full flex justify-between px-6 md:justify-center">
          <div className="swiper-button-prev">
            <MdArrowCircleLeft className="w-16 text-black hover:text-gray-700 opacity-65" />
          </div>
          <div className="swiper-button-next">
            <MdArrowCircleRight className="w-16 text-black hover:text-gray-700 opacity-65" />
          </div>
        </div>
      </div>
    </div>
  );
}
