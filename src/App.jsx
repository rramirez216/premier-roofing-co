import { useState } from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
