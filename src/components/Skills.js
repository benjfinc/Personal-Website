import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'TypeScript']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'REST APIs']
    },
    {
      category: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Linux']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
