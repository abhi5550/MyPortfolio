import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>How I Build</h5>
      <h2>Products</h2>

      <div className="container services_container">

        {/* ==================== FRONTEND ENGINEERING ======================== */}
        <article className='service'>
          <div className="service_head">
            <h3>Frontend Engineering</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon" /><p>Architecting scalable applications with React, TypeScript, Redux & Microfrontends.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Creating reusable component libraries & design systems with Storybook.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Ensuring UI consistency with SCSS, Tailwind, Styled Components.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Building accessible interfaces (WCAG, a11y) for inclusive experiences.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Integrating APIs & state management with Context, Redux Toolkit.</p></li>
          </ul>
        </article>

        {/* ==================== PERFORMANCE & SECURITY ======================== */}
        <article className='service'>
          <div className="service_head">
            <h3>Performance & Security</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon" /><p>Achieving 90+ Lighthouse scores with code splitting, lazy loading, asset optimization.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Implementing strict Content Security Policies (CSP), XSS & CSRF prevention.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Writing robust unit & integration tests with Jest, RTL, Playwright.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Improving SEO & Core Web Vitals for better user acquisition.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Leveraging CI/CD pipelines for quality and reliability.</p></li>
          </ul>
        </article>

        {/* ==================== COLLABORATION & LEADERSHIP ======================== */}
        <article className='service'>
          <div className="service_head">
            <h3>Collaboration & Leadership</h3>
          </div>
          <ul className="service_list">
            <li><BiCheck className="service_list-icon" /><p>Leading key product initiatives like Walmart's Brand Portal & GTS platform.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Reviewing PRs, mentoring developers, driving design & architecture decisions.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Partnering with PMs & UX teams to align on business goals.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Streamlining developer workflows with Git, GitHub & code quality checks.</p></li>
            <li><BiCheck className="service_list-icon" /><p>Continuously exploring new tech to future-proof applications.</p></li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services
