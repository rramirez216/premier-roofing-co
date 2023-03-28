import React from 'react'
import Footer from '../Components/Footer/Footer'
import hammer from '../assets/hammer.jpg'
import servicesProvidedArray from '../data/serviceArray'

function ServicesPage({
  serviceDisplayed: { name, description },
  setServiceDisplayed,
}) {
  return (
    <main className='text-dark-blue'>
      <section className='flex justify-center pt-32'>
        <div className='w-240 grid grid-cols-2 pl-16'>
          <p className='justify-self-center'>
            A reputable roofing company should be able to provide these services
            with the highest quality materials, expertise, and professionalism,
            ensuring the building is protected from the elements and its value
            is preserved.
          </p>
        </div>
      </section>
      <section className='flex justify-center  bg-off-white'>
        <div className='w-240 grid grid-cols-2  py-24 px-20'>
          <div className='justify-self-center'>
            <div className='mb-12 min-h-[128px]'>
              <h3 className='font-bold mb-4'>{name}</h3>
              <p>{description}</p>
            </div>
            <ul className='flex flex-col '>
              {servicesProvidedArray.map(({ id, name, description }) => (
                <li
                  className='py-2 pl-4  border border-dark-blue cursor-pointer'
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
          <div className='w-[160px] justify-self-center self-end'>
            <img src={hammer} alt='' />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default ServicesPage

// Premier Roofing Co. offers a range of services related to roof repair, replacement, and maintenance. These services include:
