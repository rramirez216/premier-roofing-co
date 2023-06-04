import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import Footer from '../Components/Footer/Footer'
import hammer from '../assets/hammer.jpg'
import servicesProvidedArray from '../data/serviceArray'
import { useScrollPosition } from '../hooks/useScrollPosition'

function ServicesPage({
  serviceDisplayed: { name, description },
  setServiceDisplayed,
  setToggleContact,
}) {
  const [percent, setPercent] = useState(100)
  const scrollPosition = useScrollPosition()
  // useEffect(() => {
  //   if (scrollPosition > 0 && percent > 0) {
  //     setPercent(percent - 10)
  //   } else {
  //     setPercent(percent + 10)
  //   }
  // }, [scrollPosition])
  // -translate-y-[${20}%]
  // cant use dynamic values with arbitrary values

  return (
    <main className='text-dark-blue'>
      <section className='flex justify-center pt-52 lg:pt-60 pb-16 lg:pb-24'>
        <div className='w-240 grid grid-cols-1 place-items-center lg:grid-cols-2 pl-16 pr-16 lg:pr-0'>
          <div className='min-h-[156px] md:max-w-[448px]'>
            <p className='text-sm'>Raising the Bar on Roofing</p>
            <h1 className='font-bold mb-4 text-3xl'>{name}</h1>
            <p className='text-base lg:text-lg'>{description}</p>
          </div>
        </div>
      </section>
      <section className='flex justify-center py-16 lg:py-32 px-20 bg-off-white'>
        <div className='w-240 grid grid-cols-1 lg:grid-cols-2'>
          <div className='justify-self-center'>
            <p className='font-bold text-2xl mb-8'>Other services we offer:</p>
            <ul className='flex flex-col text-base lg:text-lg'>
              {servicesProvidedArray.map(({ id, name, description }) => (
                <li
                  className='py-2 px-8 border border-dark-blue cursor-pointer transition duration-200 hover:-translate-x-4 hover:border-light-orange'
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
          <ImageWrapper
            yaxis={`translateY(-${percent}%)`}
            className={`w-[160px] justify-self-center self-end hidden lg:block`}
          >
            <img src={hammer} alt='hammer' />
          </ImageWrapper>
        </div>
      </section>
      <Footer setToggleContact={setToggleContact} />
    </main>
  )
}
const ImageWrapper = styled.div`
  transform: ${(props) => props.yaxis} scale(1.25);
  /* background-color: salmon; */
`

export default ServicesPage

// Premier Roofing Co. offers a range of services related to roof repair, replacement, and maintenance. These services include:
