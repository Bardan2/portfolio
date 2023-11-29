import React from "react";
import "./MySkills.css";

const MySkills = () => {
  return (
    <div className="all-container">
      <h1 className="head">
        My <span className="skills">Skills</span>
      </h1>
      <div className="skill-container">
        <div className="skill-box">
          <span className="title">HTML</span>
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">CSS</span>
          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Javascript</span>
          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">React</span>
          <div className="skill-bar">
            <span className="skill-per reactjs">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">Node.js</span>
          <div className="skill-bar">
            <span className="skill-per nodejs">
              <span className="tooltip">30%</span>
            </span>
          </div>
        </div>

        <div className="skill-box">
          <span className="title">MERN</span>
          <div className="skill-bar">
            <span className="skill-per mern">
              <span className="tooltip">40%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
