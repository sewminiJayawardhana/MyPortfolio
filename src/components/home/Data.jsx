import React from 'react';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__subtitle">
        Sewmini Jayawardhana
        <span className="verify-icon"></span>
      </h1>
      <h3 className="home__title">IT Undergraduate</h3>
      <p className="home__description">
        I am an IT Undergraduate and aspiring Full-Stack Developer passionate about crafting clean, efficient, and user-centric digital solutions. With a strong foundation in frontend frameworks like React and robust backend technologies like Spring Boot, Node.js, and Express, I love building end-to-end web applications that transform complex ideas into intuitive, responsive, and highly functional software solutions.
      </p>
      
      <div className="home__cv-container">
        <a href="/Sewmini_Jayawardhana_CV.pdf" download className="button button--flex">
          Download CV <i className="uil uil-download-alt button__icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Data;
