import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './Components/Nav'
import ContactForm from './Components/Footer/ContactForm'
import ServicesPage from './Pages/ServicesPage'

function App() {
  const [toggleContact, setToggleContact] = useState(false)
  const [serviceDisplayed, setServiceDisplayed] = useState({
    name: 'Roof Inspection',
    description:
      "A comprehensive assessment of the roof's condition to identify any damage or potential issues.",
  })

  const handleServiceClick = (a, b) => {
    setServiceDisplayed({ name: a, description: b })
  }
  return (
    <div className='h-full text-white text-lg relative'>
      <Nav />
      <Routes>
        <Route
          index
          element={
            <Home
              setToggleContact={setToggleContact}
              setServiceDisplayed={setServiceDisplayed}
              handleServiceClick={handleServiceClick}
            />
          }
        />
        <Route
          path='/services'
          element={
            <ServicesPage
              setToggleContact={setToggleContact}
              serviceDisplayed={serviceDisplayed}
              setServiceDisplayed={setServiceDisplayed}
            />
          }
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
