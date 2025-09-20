import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'QKart Application',
    github: 'https://github.com/abhi5550/Front-End-Projects/tree/master',
    demo: 'https://shimmering-salamander-e83632.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'RiseUpp Search Application',
    github: 'https://github.com/abhi5550/Front-End-Projects/tree/riseup_searchapp_react',
    demo: 'https://abhinavs-frontend.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'BookMyshow clone Application',
    github: 'https://github.com/abhi5550/Front-End-Projects/tree/BookMyShowClone_React',
    demo: 'https://book-my-show-clone-five-mocha.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Online Job Portal Using React And Sanity',
    github: 'https://github.com/abhi5550/Job-portal',
    demo: 'https://job-portal-three-steel.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Audio Wave Analyzer',
    github: 'https://github.com',
    demo: 'https://stupendous-khapse-2b14c3.netlify.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Excel Sheet Application',
    github: 'https://github.com',
    demo: 'https://abhi5550-excel-sheet-project.netlify.app/'
  }
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-cta'>
                <a href={github} target='_blank' rel='noopener noreferrer' className='btn'>
                  Github
                </a>
                <a href={demo} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
