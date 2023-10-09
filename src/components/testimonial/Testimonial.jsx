import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  avatar: AVTR1,
  name: 'Abhinav',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore qui ea! Soluta ullam commodi ut quos cum perspiciatis odit error hic deserunt aliquid neque, rerum, aliquam ipsum est et."

  },
  {
  avatar: AVTR2,
  name: 'Abhinav',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore qui ea! Soluta ullam commodi ut quos cum perspiciatis odit error hic deserunt aliquid neque, rerum, aliquam ipsum est et."

  
  },
  {
  avatar: AVTR3,
  name: 'Abhinav',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore qui ea! Soluta ullam commodi ut quos cum perspiciatis odit error hic deserunt aliquid neque, rerum, aliquam ipsum est et."

  },
  {
  avatar: AVTR4,
  name: 'Abhinav',
  review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore qui ea! Soluta ullam commodi ut quos cum perspiciatis odit error hic deserunt aliquid neque, rerum, aliquam ipsum est et."

  
  }
  ]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client_avatar">
                  <img src={avatar} alt="Avtar one" />
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )

          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial