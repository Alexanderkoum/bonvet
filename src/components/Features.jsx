import React from "react";
import image from "../assets/mockup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import FeatureTile from "./FeatureTile";

const Features = () => {
  return (
    <section className="py-24 -mt-[40vw] z-50">
      <div className="w-3/4 mx-auto">
        <div className="flex items-start justify-between z-50 text-white">
          
            <h2 className="md:max-w-[30%] text-7xl font-bold text-white z-[99999]">Some of the key feutures</h2>
          
          <div className="md:max-w-[50%] text-white z-50">
            
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            illo nihil tempora consequuntur aperiam eligendi deserunt? Molestias
            unde, eveniet laborum earum nemo accusamus. Ad maiores a nihil.
            Natus, officiis molestiae.
          </div>
        </div>
      
      <div className='grid md:grid-cols-3 gap-12 pt-24'>
        <FeatureTile/>
        <FeatureTile/>
        <FeatureTile/>
        <FeatureTile/>
        <FeatureTile/>
        <FeatureTile/>
      </div>
      </div>
    </section>
  );
};

export default Features;
