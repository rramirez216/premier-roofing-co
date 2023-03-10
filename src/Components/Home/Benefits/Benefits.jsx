import React from 'react'
import Benefit from './Benefit'
import { Clock, AlertTriangle, PiggyBank } from 'lucide-react'

function Benefits() {
  return (
    <section className='flex flex-col items-center text-dark-blue gap-24 pb-32'>
      <h2 className='text-4xl font-bold mb-8'>
        THE BENEFITS OF HIRING PREMIER ROOFING CO.
      </h2>
      <ul className='flex flex-row justify-center gap-16'>
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
      <button className='btn'>Get a Quote</button>
    </section>
  )
}

export default Benefits
