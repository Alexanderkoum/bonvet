import React from "react";
import phone from "../assets/iphoneresults.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import FeatureItem from "./FeatureItem";

const Setup = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

  return (
    <section className="pb-48" ref={ref}>
      <motion.div
      style={{
        transform: isInView ? "none" : "translatey(13%)",
        opacity:isInView? '1':'0',
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}

      className="w-3/4 mx-auto flex gap-20 items-center justify-between">
        <div className="w-1/2 ">
          <h2 className="text-7xl font-bold">Incredible advantages</h2>
          <div className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            illo nihil tempora consequuntur aperiam eligendi deserunt? Molestias
            unde, eveniet laborum earum nemo accusamus. Ad maiores a nihil.
            Natus, officiis molestiae.
          </div>
          <div className='py-6 flex flex-wrap gap-4'>
              <FeatureItem/>
              <FeatureItem/>
              <FeatureItem/>
              <FeatureItem/>
          </div>
        </div>
        <div className='relative'>
        
          <img
            src={phone}
            alt="phone with advantages"
            width="600"
            height="600"
            className='relative'
            style={{zIndex:'20' }}
          />
          <div className='p-48 rounded-full bg-yellow-300/70 backdrop-blur drop-shadow-2xl hover:scale-1 ease-in-out duration-300 absolute top-48 right-48 border-4 border-white/10' style={{zIndex:'10'}}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Setup;
