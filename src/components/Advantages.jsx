import React from 'react'
import phone from '../assets/vetdog.png'
import Button from './Button'
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";


const Advantages = () => {
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
        className='w-3/4 mx-auto flex gap-20 items-center justify-between'>
            <div><img src={phone} alt="phone with advantages" width='600' height='600' /></div>
            <div className='w-1/2 '>
            <h2 className="text-7xl font-bold">Incredible advantages</h2>
            <div className="my-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            illo nihil tempora consequuntur aperiam eligendi deserunt? Molestias
            unde, eveniet laborum earum nemo accusamus. Ad maiores a nihil.
            Natus, officiis molestiae.
          </div>
          <div className='md:w-1/2'><Button content='learn more'/></div>
            </div>
        </motion.div>
    </section>
  )
}

export default Advantages