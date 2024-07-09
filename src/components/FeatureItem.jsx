import React from 'react'
import alex from "../assets/alex.png";

const FeatureItem = () => {
  return (
    <div className='flex items-center justify-start gap-2 shadow-inner shadow-lg p-2 bg-white rounded-xl pr-12'>
                  <div className='p-4 rounded-full shadow bg-white w-[60px] h-[60px] flex items-center justify-center'><img src={alex} alt="" /></div>
                  <p className=''>the key feuture</p>
              </div>
  )
}

export default FeatureItem