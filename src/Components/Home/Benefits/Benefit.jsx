import React from 'react'

function Benefit({ heading, text, children }) {
  return (
    <li className=' max-w-xs flex flex-col items-center gap-6 lg:max-w-sm lg:flex-1'>
      {children}
      <h3 className='font-semibold text-xl lg:text-2xl'>{heading}</h3>
      <p className='text-base lg:text-lg'>{text}</p>
    </li>
  )
}

export default Benefit
