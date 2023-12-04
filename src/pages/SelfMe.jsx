import React from "react";
import "../styles/SelfMe.css";

const SelfMe = () => {
  return (
    <>
      <div className="intro">
        <h1 className="aboutme">
          About <span className="colored">Me</span>
        </h1>
        <div className="contentBox">
          <div className="img-content">
            <img src="newlook1.jpeg" alt="about" />
            <p className="names">Bardan Nepali</p>
          </div>
          <div className="text-content">
            <p>
              I'm <span className="colored">Bardan</span>. A Web Developer, and
              I'm very passionate and dedicated to my work. I have aquired the
              skills and knowledge necessary to make your project a success. I
              enjoy every step of the design process, from discussion and
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfMe;
