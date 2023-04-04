import React from 'react'
import { Search, Hammer, Wind } from 'lucide-react'
import ListItemServices from './ListItemServices'
import servicesProvidedArray from '../../../data/serviceArray'

function Services({ setServiceDisplayed, handleServiceClick }) {
  return (
    <section className='flex flex-col items-center text-dark-blue gap-24 pt-32 pb-32'>
      <h2 className='text-4xl font-bold mb-8'>EXPLORE OUR SERVICES</h2>
      <ul className='flex flex-row justify-center gap-16'>
        <ListItemServices
          heading={'ROOF INSPECTION'}
          children={<Search size={64} />}
          serviceObject={servicesProvidedArray[0]}
          setServiceDisplayed={setServiceDisplayed}
          handleServiceClick={handleServiceClick}
        />
        <ListItemServices
          heading={'ROOF REPAIR'}
          children={<Hammer size={64} />}
          serviceObject={servicesProvidedArray[1]}
          setServiceDisplayed={setServiceDisplayed}
          handleServiceClick={handleServiceClick}
        />
        <ListItemServices
          heading={'ROOF VENTILTION'}
          children={<Wind size={64} />}
          serviceObject={servicesProvidedArray[6]}
          setServiceDisplayed={setServiceDisplayed}
          handleServiceClick={handleServiceClick}
        />
      </ul>
    </section>
  )
}

export default Services
