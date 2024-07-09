import React from "react";
import Mockup from "../assets/iphoneresults.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="text-slate-50" ref={ref}>
      <motion.div
        style={{
          background: isInView ? "#0A2B05" : "rgba(0,0,0,0)",
          delay: 2,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        className="w-[90vw] rounded-[40px] mx-auto text-center bg-slate-200 p-24"
      >
        <motion.div
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-5">A simplified process</h2>
          <p>simple steps for a easy experience</p>
        </motion.div>
        <div className="flex gap-2 w-[95%] mx-auto">
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            <img src={Mockup} alt="mockup steps" />
          </motion.div>
          <motion.div
            style={{
              transform: isInView ? "none" : "translateY(-90%) scale(1.3)",
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
            }}
          >
            <img src={Mockup} alt="mockup steps" />
          </motion.div>
          <motion.div
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            <img src={Mockup} alt="mockup steps" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Process;
