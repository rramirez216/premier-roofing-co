import { useState } from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'

function App() {
  return (
    <div className='h-full text-white text-lg'>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
