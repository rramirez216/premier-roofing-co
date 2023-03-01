import React from 'react'

function Benefit({ heading, text, children }) {
  return (
    <div className=' max-w-xs flex flex-col items-center gap-6'>
      {children}
      <h3 className='font-semibold text-2xl'>{heading}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Benefit
