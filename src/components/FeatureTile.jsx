import React from 'react'
import image from '../assets/affichage.png'

const FeatureTile = () => {
  return (
    <div className='p-12 rounded-xl bg-white/30 backdrop-blur-xl drop-shadow-2xl hover:-translate-y-1 ease-in-out duration-300'>
        <div>
            <img src={image} alt="image tile feature" width='60' height='60'/>
        </div>
        <h3 className='font-bold text-3xl py-12'>One of the key feature</h3>
        <p>this a just a text for the description, maybe i should make it a bit longer</p>
    </div>
  )
}

export default FeatureTile