import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import { HashLink } from 'react-router-hash-link'
import Map from './Map'
import ContactForm from './ContactForm'
import Logo from '../../assets/logo.png'

function Footer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>
  return (
    <footer className='pb-4 bg-dark-blue text-white'>
      <Map />
      <div
        className='flex flex-col gap-6 lg:gap-12 text-sm py-10 px-8 lg:py-20'
        id='contact'
      >
        <div className='flex'>
          <div className='self-center flex-2 flex flex-col items-center md:flex-row flex-wrap md:justify-center gap-6 lg:gap-12'>
            <div className='max-w-[192px]'>
              <h3 className='text-lg mb-2 lg:mb-4 font-semibold'>Address</h3>
              <p className=''>2896 Metropolitan Pl Pomona, CA 91767</p>
            </div>
            <div className='min-w-[192px]'>
              <h3 className='text-lg mb-2 lg:mb-4 font-semibold'>Contact</h3>
              <p>info@premierroofingco.com</p>
              <p>(909) 232-4598</p>
            </div>
            <div className='min-w-[192px]'>
              <h3 className='text-lg mb-2 lg:mb-4 font-semibold'>Hours</h3>
              <p>Mon - Fri: 8 am - 7 pm</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 text-center lg:text-left'>
          <HashLink to='/#home' className='w-24 h-24 block'>
            <img src={Logo} alt='logo' className='' />
          </HashLink>
          <p> &copy; 2023 Premier Roofing Co. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
