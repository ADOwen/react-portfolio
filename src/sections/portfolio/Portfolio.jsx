import './portfolio.css'
import ProjectCategories from './ProjectCategories';
import Projects from './Projects';
import data from './data'
import { useState } from 'react';

const Portfolio = () => {
  const [projects, setProjects ] = useState(data)

  const categories = data.map(item => item.category)
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of my recent projects.
      </p>
      <div className="portfolio__container">
     
        <Projects projects={projects}/>
      </div>
    </section>
  )
};

export default Portfolio;