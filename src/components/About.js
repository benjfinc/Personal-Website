import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h1 className="hero-title">Hi, I'm Your Name</h1>
        <h2 className="hero-subtitle">Software Engineer</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software engineer with experience building scalable 
              applications and solving complex problems. I love creating efficient, 
              maintainable code and learning new technologies.
            </p>
            <p>
              Always open to interesting projects and opportunities.
            </p>
          </div>
          <div className="about-image">
            <img
              src={`${process.env.PUBLIC_URL}/media/headshot.png`}
              alt="Ben Finch"
              className="headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

