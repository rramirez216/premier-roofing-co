import { useState } from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className='h-full grid main-grid text-white text-lg'>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
