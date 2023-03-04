import React from 'react'

function Hero() {
  return (
    <section className='w-full h-2/3 bg-hero-pattern bg-scroll bg-cover pentagon overflow-hidden'>
      <div className='w-full h-full flex flex-row items-center pl-64'>
        <div className='w-96 flex flex-col items-start gap-12 -translate-y-20'>
          <h1 className='text-5xl '>
            <span className='text-light-orange'> BUILDING STRONG ROOFS</span>{' '}
            FOR STRONG HOMES
          </h1>
          <h2 className='text-lg'>
            So Cal's top-quality roofing service provider delivers long-term
            value and ensures the safety and protection of homes and businesses.
          </h2>
          <button className='btn'>Get a Quote</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
