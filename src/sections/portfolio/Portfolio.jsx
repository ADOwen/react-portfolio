import './portfolio.css'
import ProjectCategories from './ProjectCategories';
import Projects from './Projects';
import data from './data'
import { useState } from 'react';

const Portfolio = () => {
  const [projects, setProjects ] = useState(data)
  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of my recent projects. Use the buttons
        to toggle different categories.
      </p>
      <div className="portfolio__container">
        <ProjectCategories/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
};

export default Portfolio;