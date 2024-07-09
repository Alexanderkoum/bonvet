import React from "react";
import Button from "./Button";
import phone from '../assets/iphonekey.png'
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
    const isInView = useInView(ref);

  return (
    <section className='pt-[16vh] flex flex-wrap md:flex-nowrap items-start  justify-between flex-row text-center md:text-left min-h-screen gap-12 green-gd w-3/4 mx-auto' ref={ref}>
      <motion.div
      style={{
        transform: isInView ? "none" : "translatey(13%)",
        opacity:isInView? '1':'0',
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
      }}
      className='md:w-1/2'>
      <h1 className=" text-5xl md:text-[5vw] font-bold ">Modern pet care, from the comfort of your home.</h1>
      <p className="text-bold text-lg py-12">
        Good vet brings top veterinary care at your fingertips. Become a member
        today and experience modern pet care.
      </p>
      <div className='md:w-1/3'><Button content='voir une demo'/></div>
      
      </motion.div>
      <div className='md:w-1/2 relative'>
      <motion.div 
      style={{
        transform: isInView ? "none" : "translatey(13%)",
        opacity:isInView? '1':'0',
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
      className='p-6 rounded-full bg-yellow-300/60 backdrop-blur drop-shadow-2xl hover:scale-1 ease-in-out duration-300 absolute top-48 right-2 border-4 border-white/10 z-0'></motion.div>
      <motion.img 
      style={{
        transform: isInView ? "none" : "translatey(13%)",
        opacity:isInView? '1':'0',
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      src={phone} alt="walking pet illustration" className='scale-150'/>
      <motion.div 
      style={{
        transform: isInView ? "none" : "translatey(13%)",
        opacity:isInView? '1':'0',
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
      className='p-12 rounded-full bg-yellow-300/70 backdrop-blur drop-shadow-2xl hover:scale-1 ease-in-out duration-300 absolute top-24 left-2 border-4 border-white/10 z-20'></motion.div>
      <motion.div 
      style={{
        transform: isInView ? "none" : "translatey(13%)",
        opacity:isInView? '1':'0',
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
      }}
      className='p-48 rounded-full bg-yellow-300/70 backdrop-blur-xl drop-shadow-2xl hover:scale-1 ease-in-out duration-300 absolute top-100 right-48 border-4 border-white/10 z-30'></motion.div>
      </div>
      
     
      
    </section>
  );
};

export default Hero;
