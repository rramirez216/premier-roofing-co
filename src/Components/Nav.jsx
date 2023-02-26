import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Nav() {
  return (
    <nav className='flex justify-center fixed top-0 left-0 right-0'>
      <div className='w-3/5 flex items-center gap-8'>
        <Link to='/' className=' w-28 h-28 flex'>
          <img src={Logo} alt='logo' className='' />
        </Link>
        <div className='border-t border-b-0 border-white flex-auto'></div>
        <ul className='flex gap-4 text-white text-xl'>
          <li>
            <Link to='#Services'>Services</Link>
          </li>
          <li>
            <Link to='#About'>About</Link>
          </li>
          <li>
            <Link to='#Contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
