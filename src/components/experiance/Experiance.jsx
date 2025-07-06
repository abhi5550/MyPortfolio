import React from 'react'
import './experiance.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experiance = () => {
  return (
    <section id='experiance'>
      <h5>What Skills I Have In</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        
        <div className="experiance_frontend">
          <h3>Frontend Engineering</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>HTML5 & CSS3</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>JavaScript (ES6+)</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>TypeScript</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>ReactJS & Hooks</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Redux & Toolkit</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Next.js / Microfrontends</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>SCSS, Tailwind CSS</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Webpack, Vite, Babel</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Testing (Jest, RTL)</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Playwright(Automation)</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Performance & Security</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Accessibility (a11y)</h4><small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>

        {/* ============== ADDITIONAL SKILLS ================= */}
        <div className="experiance_backend">
          <h3>Additional Skills</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Node.js (Express)</h4><small className='text-light'>Basic</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>MongoDB</h4><small className='text-light'>Basic</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Git & GitHub</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4> MySQL (Basics)</h4><small className='text-light'>Basic</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>Python & .NET  (Basics)</h4><small className='text-light'>Fundamentals</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>DSA</h4><small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div><h4>System Desgin</h4><small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experiance
