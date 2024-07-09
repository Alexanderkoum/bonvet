import React from 'react'
import Button from './Button'
import Logo from './logo'

const Header = () => {
  return (
    <div className='h-[80px] flex justify-center items-center'>
      <div className="mx-auto w-3/4 flex justify-between items-center" >
      <Logo/>
      <div>
        <Button content='voir la demo'/>
      </div>
      </div>
      
      
    </div>
  )
}

export default Header