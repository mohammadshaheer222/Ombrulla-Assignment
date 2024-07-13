import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import { HiMiniArrowSmallRight, HiMiniArrowSmallLeft } from "react-icons/hi2";
import { Pagination, Navigation } from "swiper/modules";
import { destination } from "../data";
import star from "/src/assets/star.png";

export default function SwiperCard() {
  return (
    <div className="md:py-10 px-4 md:px-8 lg:px-32">
      <div className="text-center py-20 lg:text-start">
        <h1 className="text-lg lg:text-2xl uppercase text-[#F85E9F] tracking-widest font-semibold space-y-2">
          Top Destination
        </h1>
        <h3 className="text-2xl lg:text-4xl font-bold tracking-wider">
          Explore top destination
        </h3>
      </div>
      <div className="py-12 relative ">
        <Swiper
          effect="slide"
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={20}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          loop={true}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
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
                className="bg-white overflow-hidden w-full h-full shadow-lg rounded-3xl "
                style={{ borderRadius: "1rem" }}
              >
                <img
                  src={details.image}
                  alt={`Card ${index}`}
                  className="w-full h-96 object-cover bg-center rounded-t-3xl"
                />
                <div className="p-6">
                  <div className="lg:flex lg:justify-between">
                    <h3 className="text-xl font-bold mb-2 text-[#F85E9F] pt-2 lg:pt-0 order-2">
                      ${details.price}
                    </h3>
                    <h3 className="text-xl font-bold mb-2 order-1">{details.title}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600">{details.place}</p>
                  </div>
                  <div className="flex items-center justify-start gap-2 pt-2">
                    <p className="text-[#FF5722] font-bold">{details.rating}</p>
                    <img src={star} alt="rating" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 left-0 w-full flex justify-between px-6 md:justify-center ">
          <div className="custom-swiper-button-prev">
            <HiMiniArrowSmallLeft className="w-16 h-16" />
          </div>
          <div className="custom-swiper-button-next">
            <HiMiniArrowSmallRight className="w-16 h-16" />
          </div>
        </div>
      </div>
    </div>
  );
}
