import React from 'react'

function ContactButton({ setToggleContact }) {
  return (
    <button
      className='btn text-xl lg:text-2xl'
      onClick={() => setToggleContact(true)}
    >
      Contact Us
    </button>
  )
}

export default ContactButton
