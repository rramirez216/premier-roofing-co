import React from 'react'
import Hero from '../Components/Home/Hero'
import Benefits from '../Components/Home/Benefits/Benefits'
import Services from '../Components/Home/Services/Services'
import About from '../Components/Home/About'
import Testimonials from '../Components/Home/Testimonials'
import Footer from '../Components/Footer/Footer'

function Home({ setToggleContact }) {
  return (
    <main className='h-full'>
      <Hero setToggleContact={setToggleContact} />
      <Benefits setToggleContact={setToggleContact} />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default Home
