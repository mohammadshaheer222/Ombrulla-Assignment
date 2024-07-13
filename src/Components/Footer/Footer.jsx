import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
import fb from "/src/assets/fb.png";
import twitter from "/src/assets/twitter.png";
import instagram from "/src/assets/instagram.png";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import { details } from "../data"; // Assuming details is an array of section objects

const Footer = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  return (
    <div className="px-4 pt-12 md:px-8 lg:flex lg:justify-around lg:items-center  lg:gap-12 lg:pl-28 w-full">
      <div className="lg:w-[50%]">
        <Link
          to="/"
          className="cursor-pointer flex gap-4 sm:order-2 md:order-1"
        >
          <img src={logo} alt="logo" width={40} height={40} />
          <h4 className="text-2xl font-bold">Travlog</h4>
        </Link>
        <p className="pt-6 text-[#19182580]">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex gap-8 pt-6">
          <img
            src={fb}
            alt="facebook-logo"
            className="active:scale-95 active:shadow-lg duration-100 cursor-pointer"
          />
          <img
            src={twitter}
            alt="twitter-logo"
            className="active:scale-95 active:shadow-lg duration-100 cursor-pointer"
          />
          <img
            src={instagram}
            alt="instagram-logo"
            className="active:scale-95 active:shadow-lg duration-100 cursor-pointer"
          />
        </div>
      </div>

      <div className="py-8 md:flex md:justify-between md:items-center lg:flex-row lg:items-start lg:gap-8 lg:justify-between lg:w-[50%]">
        {details.map((data, index) => (
          <div
            key={index}
            className="md:flex md:flex-col md:justify-start md:items-start"
          >
            <div
              className="flex items-center justify-between cursor-pointer md:flex-col space-y-4"
              onClick={() => toggleSection(data.title)}
            >
              <p className="font-bold">{data.title}</p>
              <MdOutlineArrowCircleDown className="md:hidden" />
            </div>
            <div
              className={`details ${openSections[data.title] ? "show" : ""}`}
            >
              <ul className="space-y-4 lg:space-y-8 lg:py-8 py-4 text-[#19182580]">
                {data.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
