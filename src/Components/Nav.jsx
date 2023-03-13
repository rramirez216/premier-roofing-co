import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'

function Nav() {
  return (
    <nav className='flex justify-center fixed top-0 left-0 right-0 z-10'>
      <div className='w-3/4 flex items-center gap-8'>
        <Link to='/' className='w-32 h-32'>
          <img src={Logo} alt='logo' className='' />
        </Link>
        <div className='border-t border-b-0 border-white flex-auto'></div>
        <ul className='flex items-baseline gap-4 text-white text-2xl'>
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
        <button className='btn'>Get a Quote</button>
      </div>
    </nav>
  )
}

export default Nav
