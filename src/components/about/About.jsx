import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        {/* About Me Image */}
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        {/* About Content */}
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6+ Years</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Features Delivered</h5>
              <small>50+ Shipped</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <div>
            <p>
              ✈️ I’m Abhinav Sonakpuriya, a <strong>Senior Frontend Developer</strong> with 6+ years of experience architecting scalable, high-performance web applications. I specialize in <strong>React.js, TypeScript, Redux,</strong> and <strong>Micro Frontends etc</strong> to build seamless, maintainable platforms.
            </p>
            <p>
              🚀 Passionate about optimizing performance, achieving top <strong>Lighthouse scores</strong>, and applying modern design patterns like <strong>component composition, higher-order components,</strong> and <strong>context-driven state management</strong> for clean, future-proof code.
            </p>
            <p>
              🔍 Experienced in implementing <strong>security best practices</strong> (XSS, CSRF, CSP), <strong>accessibility (a11y)</strong> standards, automated testing with <strong>Jest & React Testing Library</strong>, and driving <strong>performance improvements</strong> through code splitting and lazy loading.
            </p>
            <p>
              🌍 Successfully led mission-critical projects like Walmart’s <strong>Brand Portal</strong> and <strong>Global Technical Services</strong>, boosting engagement by 25% and enhancing functionality by 30%. Always open to new opportunities and collaborations. Let’s connect!
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
