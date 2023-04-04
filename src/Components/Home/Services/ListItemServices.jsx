import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function ListItemServices({
  heading,
  children,
  serviceObject: { name, description },
  setServiceDisplayed,
  handleServiceClick,
}) {
  return (
    <li className='w-72 h-96 flex flex-col items-center justify-center gap-6 rounded-lg text-white list-item-background text-center'>
      {children}
      <h3 className='max-w-min font-semibold text-2xl'>{heading}</h3>

      <Link
        className='flex items-center text-light-orange'
        to='/services'
        onClick={() => handleServiceClick(name, description)}
      >
        <ChevronRight size={24} className='' />

        <span className='text-xl'>LEARN MORE</span>
      </Link>
    </li>
  )
}

export default ListItemServices
