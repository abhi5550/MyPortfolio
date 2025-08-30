import React, { useState } from 'react'
import './testimonial.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import Sakar from '../../assets/Sakar.PNG'
import MoniKa from '../../assets/Monika.PNG'
import Sindhu from '../../assets/Sindhu.png'
import Sindhu1 from '../../assets/Sindhu1.png'
import vignesh from '../../assets/Vignesh.png'
import Thara from '../../assets/Thara.PNG'
import Gaurav from '../../assets/Gaurav.PNG'

const data = [
  {
    name: 'Sakar Chiplunkar',
    review: `Shoutout to you for excelling in every task give to you with so much dedication and sincerity. Since last year, whatever exciting features (translation, brand portfolio, Auto fitment etc ) which we have went live with, you had key contributions in all of them... 😊`,
    image: Sakar
  },
  {
    name: 'Gaurav Gera',
    review:`It has been great experience working with Abhinav on the Translation tasks. We both were new to the project and were given a big task to convert every string in Brand Portal to Chinese which included all the edge cases and more than 15 screens. 
Abhinav worked on it with complete ownership and always asked the right questions....`,
    image: Gaurav
  },
  {
    name: 'Sindhu Mohana',
    review: `It’s our pleasure to have you with us and  we truly value your contributions to Brand Portal!
Keep up the good work ! 👏🏼`,
    image: Sindhu1
  },
  {
    name: 'Vignesh Prasad',
    review: `Congratulations Abhinav for winning the Associate of the Month award! 🥳 `,
    image: vignesh
  },
  {
    name: 'Thara Pattuam Veetil',
    review: `Wow, great feedback. Congrats Abhinav. So happy to see it coming in the first month of new year. Thank you for all your efforts.`,
    image: Thara
  },
  {
    name: 'Monika',
    review: `Thank you for owning this responsibility and driving the improvement in Functional automation coverage by adding 38 automated tests (front-end) in ~1 week. Kudos to your persistent efforts!`,
    image: MoniKa
  },
  {
    name: 'Sindhu Mohana',
    review: `🎉🎉🎉
A HUGE shoutout to @Abhinav Sonakpuriya for Single handedly uplifting the Automation coverage on ILD and Bulk claims - 19+9 -> 28 tests added by @Abhinav Sonakpuriya 👏🤯
🐒 Thanks SOOOO much @Abhinav Sonakpuriya, This really helps the Leadership review that happens today! ( now.`,
    image: Sindhu
  },
];

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal_overlay_testimonial" onClick={onClose}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Proof" className="modal_image" />
        <button className="close_btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id='testimonial'>
      <h5>Appreciation from Colleagues & Leaders</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ name, review, image }, index) => (
          <SwiperSlide key={index} className='testimonial'>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>{review}</small>
            <div style={{ marginTop: '1rem' }}>
              <a
                href="#!"
                onClick={() => setSelectedImage(image)}
                className='view_proof_link'
              >
                View Full Testimonial
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default Testimonial;
