import React from 'react'
import logoimg from '../assets/logo-alt.png'

const Logo = () => {
  return (
    <div className='flex jusitfy-content items-center gap-5'>
          <img src={logoimg} alt="logo map" width='50' height='50' />
          <span className='text-3xl font-bold'>Bonvet.</span>
        </div>
  )
}

export default Logo