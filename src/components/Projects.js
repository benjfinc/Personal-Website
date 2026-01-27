import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of your first project. Add details about what you built, technologies used, and key features.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of your second project. Showcase your skills and problem-solving abilities.',
      technologies: ['Python', 'Flask', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of your third project. Highlight what makes this project special or challenging.',
      technologies: ['JavaScript', 'Express', 'MySQL'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
