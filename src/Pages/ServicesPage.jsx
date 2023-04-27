import React, { useState, useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import hammer from '../assets/hammer.jpg'
import servicesProvidedArray from '../data/serviceArray'
import { useScrollPosition } from '../hooks/useScrollPosition'

function ServicesPage({
  serviceDisplayed: { name, description },
  setServiceDisplayed,
}) {
  // const scrollPosition = useScrollPosition()
  const [scrollPosition, setScrollPosition] = useState(0)
  const [imageSize, setImageSize] = useState(100)

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset)
      setImageSize(100 - window.pageYOffset / 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  return (
    <main className='text-dark-blue'>
      <section className='flex justify-center pt-48 pb-20'>
        <div className='w-240 grid grid-cols-2 pl-16'>
          <div className='min-h-[156px]'>
            <p className='text-sm'>Raising the Bar on Roofing</p>
            <h1 className='font-bold mb-4 text-3xl'>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
      </section>
      <section className='flex justify-center py-24 px-20 bg-off-white'>
        <div className='w-240 grid grid-cols-2  '>
          <div className='justify-self-center'>
            <p className='font-bold text-2xl mb-8'>Other services we offer:</p>
            <ul className='flex flex-col '>
              {servicesProvidedArray.map(({ id, name, description }) => (
                <li
                  className='py-2 px-8  border border-dark-blue cursor-pointer'
                  key={id}
                  onClick={() =>
                    setServiceDisplayed({
                      name: name,
                      description: description,
                    })
                  }
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`w-[160px] justify-self-center self-end -translate-y-[${scrollPosition}px] scale-[1.25]`}
          >
            <img src={hammer} alt='hammer' />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default ServicesPage

// Premier Roofing Co. offers a range of services related to roof repair, replacement, and maintenance. These services include:
