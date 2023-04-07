import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Nav({ toggleNav, setToggleNav }) {
  const scrollPosition = useScrollPosition()
  console.log(scrollPosition, toggleNav)
  const { pathname } = useLocation()

  return (
    <nav
      className={`flex md:justify-center fixed top-0 left-0 right-0 z-10 ${
        scrollPosition > 50 || pathname === '/services'
          ? 'text-dark-blue bg-white shadow-lg'
          : 'text-white'
      }  text-2xl`}
    >
      <div className='w-full px-8 xl:px-0 xl:w-7/12 flex justify-between items-center gap-8'>
        <Link to='/' className='w-24 sm:w-32 sm:h-32 sm:min-w-[8rem]'>
          <img src={Logo} alt='logo' className='' />
        </Link>
        <div
          className={`hidden border-t-2 border-b-0 ${
            scrollPosition > 50 || pathname === '/services'
              ? 'border-dark-blue'
              : 'border-white'
          }  flex-auto sm:block`}
        ></div>
        {toggleNav ? (
          <X
            onClick={() => setToggleNav(!toggleNav)}
            size={40}
            fill='#fff'
            className='shrink-0 z-20 sm:hidden'
          />
        ) : (
          <Menu
            onClick={() => setToggleNav(!toggleNav)}
            size={40}
            className='shrink-0 sm:hidden'
          />
        )}
        <div
          className={`bg-dark-blue fixed inset-0 ${
            toggleNav ? 'translate-x-0 ' : '-translate-x-full'
          }`}
        >
          <ul className='flex flex-col items-center justify-center gap-20 font-semibold h-full text-3xl text-white'>
            <li>
              <Link to='/'>Home</Link>
            </li>
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
        <ul className='hidden sm:flex items-baseline gap-4 font-semibold'>
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
