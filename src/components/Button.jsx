import React from 'react'

const Button = ({content}) => {
  return (
    <a href='#' className='rounded-full py-3 px-5 bg-green-950 text-white flex items-center justify-center'>{content}</a>
  )
}

export default Button