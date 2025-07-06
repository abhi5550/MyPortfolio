import React from 'react'
import './testimonial.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ME from '../../assets/sakar.png'

const data = [
  {
    name: 'Sakar Chiplunkar',
    review: `Shoutout to you for excelling in every task give to you with so much dedication and sincerity. Since last year, whatever exciting features (translation, brand portfolio, Auto fitment etc ) which we have went live with, you had key contributions in all of them... 😊`,
    image: ME
  },
  {
    name: 'Gaurav Gera',
    review:` It has been great experience working with Abhinav on the Translation tasks. We both were new to the project and were given a big task to convert every string in Brand Portal to Chinese which included all the edge cases and more than 15 screens. 
Abhinav worked on it with complete ownership and always asked the right questions....`,
    image: '/assets/testimonials/gaurav.png'
  },
  {
    name: 'Sindhu Mohana',
    review: `It’s our pleasure to have you with us and  we truly value your contributions to Brand Portal  !
Keep up the good work ! 👏🏼`,
    image: '/assets/testimonials/sindhu.png'
  },
  {
    name: 'Mayur Patil',
    review: `Thank you for owning this responsibility and driving the improvement in Functional automation coverage by adding 38 automated tests (front-end) in ~1 week. Kudos to your persistent efforts!`,
    image: '/assets/testimonials/mayur.png'
  },
  {
    name: 'Sindhu Mohana (Appreciation Note)',
    review: ` Abhinav took the responsibility of being a significant contributor to Brand Portal front-end. Delivered key features with ownership and good quality. A truly great colleague during critical and urgent tasks.`,
    image: '/assets/testimonials/sindhu-note.png'
  },
  {
    name: 'Rajkumar Vaidyanathan',
    review: `Thanks also to Abhinav for your efforts on this feature, we really appreciate that. Your dedication and commitment makes a huge difference!`,
    image: '/assets/testimonials/raj.png'
  },
  {
    name: 'Thara Pattuam Veetil',
    review: `Wow, great feedback. Congrats Abhinav. So happy to see it coming in the first month of new year. Thank you for all your efforts.`,
    image: '/assets/testimonials/thara.png'
  },
];

const Testimonial = ({ openModal }) => {
  return (
    <section id='testimonial'>
      <h5>Appreciation from Colleagues & Leaders</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map(({ name, review, image }, index) => (
          <SwiperSlide key={index} className='testimonial'>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
            <div style={{ marginTop: '1rem' }}>
              <a href="#!" onClick={() => openModal(image)} className='view_proof_link'>
                View Full Testimonial
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonial
