import React from "react";
import "../styles/HomeLogo.css";
import Typical from "react-typical";
import { Link } from "react-router-dom";

const HomeLogo = () => {
  return (
    <div className="allBox">
      {/* texts code */}
      <div className="textContent">
        <h3 className="heading-3">
          Hi, I'm <span className="name">Bardan</span>
        </h3>
        <h1 className="typical">
          <Typical
            loop={Infinity}
            steps={[
              "Hi, React 👋🏿",
              2000,
              "Frontend Developer 💻",
              2000,
              "Love To Coding ❤️",
              2000,
            ]}
          />
        </h1>

        <p className="primary-text-3">
          Coding is a art and I'm <span className="text"> Eager </span> to{" "}
          <span className="text">Learn </span>
          and <span className="text"> Grow</span> .
        </p>

        <div className="btns">
          <Link to="/contact" className="btn">
            Hire Me
          </Link>
          <a
            href="/Bardan-CV Resume.pdf"
            download="Bardan-CV Resume.pdf"
            className="btn btn-light"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Logos */}
      <div className="logoContent">
        <div class="content">
          <img src="react1.png" className="react" alt="" />

          <img src="bardan.png" className="bardan" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeLogo;
