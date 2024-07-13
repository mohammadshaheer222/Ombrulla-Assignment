import React from "react";
import Slider from "react-slick";
import { destination } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function SwiperCard() {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <MdArrowForward />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdArrowBack />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    vertical: false,
    responsive: [
      {
        breakpoint: 661,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="py-10">
      <div className="text-center space-y-4 py-10">
        <h1 className="text-2xl uppercase text-[#F85E9F] tracking-widest font-bold">
          Services
        </h1>
        <h3 className="text-4xl font-bold tracking-wider">
          Our top value categories for you
        </h3>
      </div>
      <div className="swiper-container">
        <div className="arrow-container">
          <PrevArrow />
          <NextArrow />
        </div>
        <Slider {...settings} className="custom-slider">
          {destination.map((data, index) => (
            <div key={index} className="slide-container">
              <div className="slide px-6 py-8 bg-blue-50 shadow-lg">
                <img src={data.image} alt={data.title} className="slide-image" />
                <div className="space-y-2 pt-4">
                  <p className="font-bold text-[#F85E9F] text-lg">{data.price}</p>
                  <p className="font-bold text-lg">{data.title}</p>
                  <p className="text-[#19182580]">{data.place}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
