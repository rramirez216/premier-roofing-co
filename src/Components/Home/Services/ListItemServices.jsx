import React from 'react'
import { ChevronRight } from 'lucide-react'

function ListItemServices({ heading, children }) {
  return (
    <li className='w-72 h-96 flex flex-col items-center justify-center gap-6 rounded-lg text-white list-item-background text-center'>
      {children}
      <h3 className='max-w-min font-semibold text-2xl'>{heading}</h3>

      <span className='flex items-center text-light-orange'>
        <ChevronRight size={24} className='' />

        <span className='text-xl'>LEARN MORE</span>
      </span>
    </li>
  )
}

export default ListItemServices
