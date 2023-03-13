import React from 'react'
import { Search, Hammer, Wind } from 'lucide-react'
import ListItemServices from './ListItemServices'

function Services() {
  return (
    <section className='flex flex-col items-center text-dark-blue gap-24 pt-32 pb-32'>
      <h2 className='text-4xl font-bold mb-8'>EXPLORE OUR SERVICES</h2>
      <ul className='flex flex-row justify-center gap-16'>
        <ListItemServices
          heading={'ROOF INSPECTION'}
          children={<Search size={64} />}
        />
        <ListItemServices
          heading={'ROOF REPAIR'}
          children={<Hammer size={64} />}
        />
        <ListItemServices
          heading={'ROOF VENTILTION'}
          children={<Wind size={64} />}
        />
      </ul>
    </section>
  )
}

export default Services
