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

      <span className='flex items-center text-light-orange'>
        <ChevronRight size={24} className='' />

        <Link
          to='/services'
          className='text-xl'
          onClick={() => handleServiceClick(name, description)}
        >
          LEARN MORE
        </Link>
      </span>
    </li>
  )
}

export default ListItemServices
