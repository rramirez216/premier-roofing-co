import React from 'react'

function ContactButton({ setToggleContact }) {
  return (
    <button className='btn' onClick={() => setToggleContact(true)}>
      Get in Touch
    </button>
  )
}

export default ContactButton
