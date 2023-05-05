import React from 'react'
import { X } from 'lucide-react'

function ContactForm({ toggleContact, setToggleContact }) {
  return (
    <div
      className={`fixed inset-0 bg-dark-blue flex justify-center items-center bg-opacity-80 z-20 ${
        toggleContact ? null : 'hidden'
      }`}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className=' flex flex-col gap-8 w-min md:min-w-[576px] bg-white text-dark-blue py-8 px-16 rounded-md relative'
      >
        <div
          className='absolute top-0 right-0 text-dark-orange -translate-y-full cursor-pointer py-2'
          onClick={() => setToggleContact(false)}
        >
          <X size={40} />
        </div>
        <h3 className='text-2xl'>Contact Us</h3>
        <div className='column-flex'>
          <label className='' htmlFor='full-name'>
            Full Name:
          </label>
          <input
            type='text'
            className='custom-input md:w-full'
            id='full-name'
          />
        </div>
        <div className='column-flex'>
          <label htmlFor='email'>Email:</label>
          <input type='email' className='custom-input md:w-full' id='email' />
        </div>
        <div className='column-flex'>
          <label className='' htmlFor='subject'>
            Subject:
          </label>
          <input type='text' className='custom-input md:w-full' id='subject' />
        </div>
        <div className='column-flex'>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' className='bg-grey p-3 rounded-sm md:h-48' />
        </div>
        <button className='btn'>Send</button>
      </form>
    </div>
  )
}

export default ContactForm
