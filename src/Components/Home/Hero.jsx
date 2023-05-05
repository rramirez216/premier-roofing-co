import React from 'react'
import ContactButton from '../ContactButton'

function Hero({ setToggleContact }) {
  return (
    <section
      className='w-full h-full bg-hero-pattern bg-scroll bg-cover pentagon overflow-hidden'
      id='home'
    >
      <div className=' h-full flex flex-row justify-center items-center pl-8 pr-8 md:justify-start md:pr-0 md:pl-32 xl:pl-64'>
        <div className='w-96 flex flex-col items-start gap-6 lg:gap-12 -translate-y-20'>
          <h1 className='text-3xl lg:text-4xl xl:text-5xl'>
            <span className='text-light-orange'> BUILDING STRONG ROOFS</span>{' '}
            FOR STRONG HOMES
          </h1>
          <h2 className='text-base lg:text-lg'>
            So Cal's top-quality roofing service provider delivers long-term
            value and ensures the safety and protection of homes and businesses.
          </h2>
          <div className='self-center md:self-start'>
            <ContactButton setToggleContact={setToggleContact} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
