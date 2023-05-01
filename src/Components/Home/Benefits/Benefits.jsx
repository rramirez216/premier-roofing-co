import React from 'react'
import { Clock, AlertTriangle, PiggyBank } from 'lucide-react'
import Benefit from './Benefit'
import ContactButton from '../../ContactButton'

function Benefits({ setToggleContact }) {
  return (
    <section className='flex flex-col items-center text-dark-blue gap-12 pb-16 lg:gap-24 lg:pb-32'>
      <h2 className='text-2xl font-bold mb-8 px-8 lg:px-0 lg:text-4xl'>
        THE BENEFITS OF HIRING PREMIER ROOFING CO.
      </h2>
      <ul className='flex flex-col gap-8 px-10 lg:px-0 lg:flex-row lg:justify-center lg:gap-16'>
        <Benefit
          children={<Clock fill='#ffb703' size={64} />}
          heading={'TIME-SAVING'}
          text={
            'We have the resources to complete the job quickly and efficiently, saving you time and effort.'
          }
        />
        <Benefit
          children={<AlertTriangle fill='#ffb703' size={64} />}
          heading={'SAFETY'}
          text={
            'The job is done safely, minimizing the risk of accidents and injuries.'
          }
        />
        <Benefit
          children={<PiggyBank fill='#ffb703' size={64} />}
          heading={'COST-EFFECTIVE'}
          text={
            'Minimizes the need for future repairs by doing the job right the first time around.'
          }
        />
      </ul>
      <ContactButton setToggleContact={setToggleContact} />
    </section>
  )
}

export default Benefits
