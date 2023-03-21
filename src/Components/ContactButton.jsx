import React from 'react'

function ContactButton({ setToggleContact }) {
  return (
    <button className='btn' onClick={() => setToggleContact(true)}>
      Contact Us
    </button>
  )
}

export default ContactButton
