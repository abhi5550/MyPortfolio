import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiance from './components/experiance/Experiance'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './index.css' // optional, if you want to put modal CSS here

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalImage('');
    setModalOpen(false);
  };

  return (
    <>
     {/* Global Modal */}
      {modalOpen && (
        <div className='modal_overlay' onClick={closeModal}>
          <div className='modal_content' >
            <img src={modalImage} alt="Testimonial Proof" />
          </div>
        </div>
      )}
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Services />
      <Portfolio />
      <Testimonial openModal={openModal} />
      <Contact />
      <Footer />

     
    </>
  )
}

export default App
