import { Link } from "react-router-dom";
import "../styles/NavbarStyle.css";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [clickMe, setClickMe] = useState(false);
  const change = () => setClickMe(!clickMe);

  const [scroll, setScroll] = useState(false);
  const scrollDown = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", scrollDown);

  return (
    <div className={scroll ? "navbar active" : "navbar"}>
      <Link to="/">
        <h1 className="p-logo">BN</h1>
      </Link>

      <ul className={clickMe ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">HOME</Link>
        </li>

        <li>
          <Link to="/skills">SKILLS</Link>
        </li>

        <li>
          <Link to="/myself">ABOUT ME</Link>
        </li>

        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>

        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={change}>
        {!clickMe ? (
          <FaBars size={25} style={{ color: "white" }} />
        ) : (
          <FaTimes size={25} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
