import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { useScrollPosition } from '../hooks/useScrollPosition'

function Nav() {
  const scrollPosition = useScrollPosition()
  console.log(scrollPosition)

  return (
    <nav
      className={`flex justify-center fixed top-0 left-0 right-0 z-10 ${
        scrollPosition > 50 ? 'text-dark-blue bg-white shadow-lg' : 'text-white'
      }  text-2xl`}
    >
      <div className='w-7/12 flex items-center gap-8'>
        <Link to='/' className='w-32 h-32'>
          <img src={Logo} alt='logo' className='' />
        </Link>
        <div
          className={`border-t-2 border-b-0 ${
            scrollPosition > 50 ? 'border-dark-blue' : 'border-white'
          }  flex-auto`}
        ></div>
        <ul className='flex items-baseline gap-4 font-semibold'>
          <li>
            <Link to='/services'>Services</Link>
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
