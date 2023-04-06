import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'

function Nav() {
  const scrollPosition = useScrollPosition()
  console.log(scrollPosition)
  const { pathname } = useLocation()

  return (
    <nav
      className={`flex justify-center fixed top-0 left-0 right-0 z-10 ${
        scrollPosition > 50 || pathname === '/services'
          ? 'text-dark-blue bg-white shadow-lg'
          : 'text-white'
      }  text-2xl`}
    >
      <div className='w-7/12 flex items-center gap-8'>
        <Link to='/' className='w-32 h-32 min-w-[8rem]'>
          <img src={Logo} alt='logo' className='' />
        </Link>
        <div
          className={`border-t-2 border-b-0 ${
            scrollPosition > 50 || pathname === '/services'
              ? 'border-dark-blue'
              : 'border-white'
          }  flex-auto sm:hidden`}
        ></div>
        <Menu size={32} className='hidden sm:block' />
        <ul className='flex items-baseline gap-4 font-semibold sm:hidden'>
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
