import React from "react";
import { motion } from "framer-motion";
import { companies } from "../data";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Logo = () => {
  return (
    <div className="py-12 px-4 md:px-6 lg:px-10 xl:px-16 ">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex justify-around items-start flex-wrap gap-8"
      >
        {companies.map((data, index) => (
          <motion.div
            key={index}
            variants={iconVariants(0)}
            initial="initial"
            animate="animate"
          >
            <img src={data.image} alt="company-logos" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Logo;
