import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import ContactForm from './Components/Footer/ContactForm'
import ServicesPage from './Pages/ServicesPage'

function App() {
  const [toggleContact, setToggleContact] = useState(false)
  return (
    <div className='h-full text-white text-lg relative'>
      <Nav />
      <Routes>
        <Route index element={<Home setToggleContact={setToggleContact} />} />
        <Route
          path='/services'
          element={<ServicesPage setToggleContact={setToggleContact} />}
        />
      </Routes>
      <ContactForm
        toggleContact={toggleContact}
        setToggleContact={setToggleContact}
      />
    </div>
  )
}

export default App
