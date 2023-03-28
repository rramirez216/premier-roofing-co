import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import Map from './Map'
import ContactForm from './ContactForm'
import Logo from '../../assets/Logo.png'

function Footer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: '',
  })
  if (!isLoaded) return <div>Loading...</div>
  return (
    <footer className='pb-4 bg-dark-blue'>
      <Map />
      <div className='flex flex-col gap-12 text-sm pt-20 px-8'>
        <div className='flex'>
          <div className='self-center flex-2 flex flex-row flex-wrap justify-center gap-12'>
            <div className='w-40'>
              <h3 className='text-lg mb-4 font-semibold'>Address</h3>
              <p className=''>2896 Metropolitan Pl Pomona, CA 91767</p>
            </div>
            <div className='w-40'>
              <h3 className='text-lg mb-4 font-semibold'>Contact</h3>
              <p>info@premierroofingco.com</p>
              <p>(909) 232-4598</p>
            </div>
            <div className='w-40'>
              <h3 className='text-lg mb-4 font-semibold'>Hours</h3>
              <p>Mon - Fri: 8 am - 7 pm</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className='w-24 h-24'>
            <img src={Logo} alt='logo' className='' />
          </div>
          <p> &copy; 2023 Premier Roofing Co. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
