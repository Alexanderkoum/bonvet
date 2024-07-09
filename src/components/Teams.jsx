import React from "react";
import alex from "../assets/alex.png";
import nate from "../assets/nate.png";
import jay from "../assets/jay.png";
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Teams = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
  return (
    <section className="" ref={ref}>
        <motion.div
        style={{
          transform: isInView ? "none" : "translatey(13%)",
          opacity:isInView? '1':'0',
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }} className="w-3/4 mx-auto pb-48 px-24 bg-green-100/30 rounded-xl mb-48 backdrop-blur-xl">
        <h2 className=" mx-auto py-24 text-7xl font-bold text-center ">
          Meet the team
        </h2>
        <div className="flex flex-wrap md:flex-nowrap gap-48 items-center justify-between">
          <div className="flex flex-col text-center">
            <img src={jay} alt="jay profile" />
            <p className='font-bold pt-8 text-xl'>Janaya gripper</p>
            <p>Backend Wizard</p>
            <div className='flex gap-4 items-center justify-center mt-8'>
                <img src={instagram} alt="instagram icon" width='24' height='24'/>
                <img src={twitter} alt="instagram icon" width='24' height='24'/>
                <img src={linkedin} alt="instagram icon" width='24' height='24'/>
            </div>
            
          </div>
          <div className="flex flex-col text-center">
            <img src={alex} alt="alex profile" />
            <p className='font-bold pt-8 text-xl'>Alexander koum</p>
            <p className=''>Frontend Extraordinaire</p>
            <div className='flex gap-4 items-center justify-center mt-8'>
                <img src={instagram} alt="instagram icon" width='24' height='24'/>
                <img src={twitter} alt="instagram icon" width='24' height='24'/>
                <img src={linkedin} alt="instagram icon" width='24' height='24'/>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <img src={nate} alt="nate profile" />
            <p className='font-bold pt-8 text-xl'>Nathanael Zroh</p>
            <p>Savant ux researcher</p>
            <div className='flex gap-4 items-center justify-center mt-8'>
                <img src={instagram} alt="instagram icon" width='24' height='24'/>
                <img src={twitter} alt="instagram icon" width='24' height='24'/>
                <img src={linkedin} alt="instagram icon" width='24' height='24'/>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Teams;
