import React from 'react'
import AboutImage from '../../assets/workers.jpg'
import Two from '../../assets/workers2.jpg'

function About() {
  return (
    <section className='flex text-dark-blue pt-32 pb-32'>
      <div className='flex-1 flex flex-col items-center gap-8'>
        <h2 className='text-2xl font-semibold'>WHO WE ARE</h2>
        <p className='w-2/3'>
          Premier Roofing Co. is dedicated to providing exceptional roofing
          solutions that protect and enhance the value of our customers' homes
          and businesses.
          <br />
          Our mission is to deliver the highest quality roofing services with
          integrity, professionalism, and reliability. We strive to exceed our
          customers' expectations by providing personalized attention, expert
          craftsmanship, and cost-effective solutions that meet their unique
          needs.
        </p>
      </div>
      <div className='flex-1  '>
        <img className='w-3/4' src={AboutImage} alt='construction workers' />
      </div>
    </section>
  )
}

export default About
