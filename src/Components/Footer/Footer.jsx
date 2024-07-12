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
    <div className="px-4 pt-12 lg:flex lg:gap-12 lg:px-16">
      <div className="lg:w-[50%]">
        <Link
          to="/"
          className="cursor-pointer flex gap-4 sm:order-2 md:order-1"
        >
          <img src={logo} alt="logo" width={40} height={40} />
          <h4 className="text-2xl font-bold">Travlog</h4>
        </Link>
        <p className="pt-6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex gap-8 pt-6">
          <img src={fb} alt="facebook-logo" />
          <img src={twitter} alt="twitter-logo" />
          <img src={instagram} alt="instagram-logo" />
        </div>
      </div>

      <div className="py-8 md:flex md:justify-between lg:w-[50%]">
        {details.map((data, index) => (
          <div
            key={index}
            className="md:flex md:flex-col md:justify-start md:items-start"
          >
            <div
              className="flex items-center justify-between cursor-pointer md:flex-col space-y-6"
              onClick={() => toggleSection(data.title)}
            >
              <p className="font-semibold">{data.title}</p>
              <MdOutlineArrowCircleDown className="md:hidden" />
            </div>
            <div
              className={`details ${openSections[data.title] ? "show" : ""}`}
            >
              <ul className="space-y-6 mt-6">
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
