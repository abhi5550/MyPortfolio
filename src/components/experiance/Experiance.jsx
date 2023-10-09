import React from 'react'
import './experiance.css'
import { BsFillPatchCheckFill} from 'react-icons/bs'

const Experiance = () => {
  return (
    <section id='experiance'>
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>
      <div className="container experience_container">
        <div className="experiance_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              < BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              < BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              < BsFillPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              < BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* ============== END OF FRONTEND ================= */}
        <div className="experiance_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              < BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              < BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>.NET</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              < BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              < BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Experiance