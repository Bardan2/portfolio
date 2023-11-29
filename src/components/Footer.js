import "./Footer.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="info">
      <div className="first">
        <div className="home">
          <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
          <p>Khudikhola, Aaradhana Tole Pokhara-32, Kaski Nepal</p>
        </div>
        <div className="phone">
          <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
          9762567444
        </div>

        <div className="gmail">
          <FaMailBulk
            size={20}
            style={{ color: "white", marginRight: "2rem" }}
          />
          garnukehi@gmail.com
        </div>
      </div>

      <div className="second">
        <div className="facebook">
          <Link to={"https://www.facebook.com/"}>
            <FaFacebook
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </Link>
          Facebook
        </div>
        <div className="linkedin">
          <Link to={"https://www.linkedin.com/in/bardan-nepali-b25995280/"}>
            <FaLinkedin
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </Link>
          Linkedin
        </div>
        <div className="github">
          <Link to={"https://github.com/Bardan2"}>
            <FaGithub
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
          </Link>
          Github
        </div>
      </div>
    </div>
  );
};

export default Footer;
