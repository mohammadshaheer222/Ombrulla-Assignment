import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "/src/assets/logo.png";
import menu from "/src/assets/menu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 90 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeColor);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 5,
      },
    },
  };
  const mobNavVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.4,
      },
    },
  };
  return (
    <div className={`${isOpen && "text-black"} pt-20`}>
      <motion.nav
        variants={navbarVariant}
        initial="hidden"
        animate="visible"
        className={`flex items-center justify-between md:justify-around w-full px-4 py-8 fixed left-0 right-0 top-0 z-20 ${
          color ? "bg-[#F0E9E0]" : "bg-none"
        }`}
      >
        <Link
          to="/"
          className="cursor-pointer flex gap-4 sm:order-2 md:order-1"
        >
          <img src={logo} alt="logo" width={40} height={40} />
          <h4 className="text-2xl font-bold">Travlog</h4>
        </Link>

        <div className="flex items-center gap-3 md:hidden">
          <p
            onClick={openMenu}
            className="font-medium tracking-wide cursor-pointer block "
          >
            {isOpen ? (
              <MdClose size={30} />
            ) : (
              <div>
                <img src={menu} width={40} height={40} alt="menu-icon" />
              </div>
            )}
          </p>
        </div>

        <div className="hidden sm:flex sm:order-3 sm:items-center sm:gap-4">
          <Link
            to="/login"
            className="font-semibold capitalize"
            onClick={closeMenu}
          >
            Log In
          </Link>
          <Link
            to="/sign-up"
            className=" capitalize bg-[#5D50C6] text-white px-4 py-2 rounded-full text-sm"
            onClick={closeMenu}
          >
            Sign Up
          </Link>
        </div>

        {/* desktop */}
        <div className="hidden md:flex md:justify-center md:items-center tracking-widest md:gap-x-4 lg:gap-x-10  text-[#91825]  md:order-2">
          <Link to="/" className=" Capitalize " onClick={closeMenu}>
            Home
          </Link>
          <Link to="/discover" className="Capitalize" onClick={closeMenu}>
            Discover
          </Link>
          <Link to="/deals" className="Capitalize" onClick={closeMenu}>
            Special Deals
          </Link>
          <Link to="/contact" className="Capitalize" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </motion.nav>

      {/* mobile */}
      <AnimatePresence>
        {isOpen && (
          <div>
            <motion.div
              variants={mobNavVariant}
              exit="exit"
              initial="hidden"
              animate="visible"
              className=" md:hidden sm:order-1 font-semibold tracking-wider flex flex-col items-center justify-center h-screen gap-10 fixed left-0 right-0 top-0 z-10 "
            >
              <Link to="/" className="capitalize" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/discover" className=" capitalize" onClick={closeMenu}>
                Discover
              </Link>
              <Link to="/deals" className=" capitalize" onClick={closeMenu}>
                Special Deals
              </Link>
              <Link to="/contact" className=" capitalize" onClick={closeMenu}>
                Contact
              </Link>
              <Link
                to="/login"
                className="font-semibold capitalize sm:hidden"
                onClick={closeMenu}
              >
                Log In
              </Link>
              <Link
                to="/sign-up"
                className=" capitalize bg-[#5D50C6] text-white px-4 py-2 rounded-full text-sm sm:hidden"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Outlet />
    </div>
  );
};
export default Navbar;
