import React from 'react'
import Hero from '../Components/Home/Hero'
import Benefits from '../Components/Home/Benefits/Benefits'
import Services from '../Components/Home/Services'
import About from '../Components/Home/About'
import Testimonials from '../Components/Home/Testimonials'

function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Services />
      <About />
      <Testimonials />
    </main>
  )
}

export default Home
