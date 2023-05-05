import React from 'react'

function ContactButton({ setToggleContact }) {
  return (
    <button
      className='btn text-xl self-center lg:text-2xl transition duration-200 hover:bg-darker-orange hover:scale-105'
      onClick={() => setToggleContact(true)}
    >
      Contact Us
    </button>
  )
}

export default ContactButton
