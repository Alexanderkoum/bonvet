import React from "react";
/*import banner from '../assets/yellow-illustration-product.jpg'*/
import banner from "../assets/usage.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="rounded-lg w-[98%] mx-auto h-full mb-36 darkgradient"
      ref={ref}
    >
      <motion.img
      style={{
        transform: isInView ? "none" : "translatey(-3%) scale(1.01)",
        opacity:isInView? '1':'0',
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
      }}
        src={banner}
        alt="yellow illustration product key frames"
        className="rounded-3xl "
      />
    </section>
  );
};

export default Banner;
