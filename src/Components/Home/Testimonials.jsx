import React from 'react'
import testimonialsArray from '../../data/testimonials'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper'

function Testimonials() {
  return (
    <section className='pt-20 pb-20 bg-dark-blue flex justify-center'>
      <div className='border-t border-b border-dark-orange pt-8 pb-8 w-1/2'>
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {testimonialsArray.map((value) => (
            <SwiperSlide key={value.id} className='flex justify-center'>
              <figure className='max-w-lg text-center'>
                <blockquote className='text-2xl pb-4'>{value.quote}</blockquote>
                <figcaption className='text-center'>- {value.name}</figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
