import React from "react";
import "../styles/MyProjects.css";
import { Link } from "react-router-dom";

const MyProjects = () => {
  return (
    <>
      <div className="project-container">
        <h1 className="project-head">
          My <span className="bgred">Projects</span>
        </h1>
        <div className="project-box">
          <div className="project">
            <Link to="https://bardanfolio.netlify.app/">
              <img src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDE4fHxkZXZlbG9wZXJ8ZW58MHx8fHwxNjY1NTk2Nzgx&ixlib=rb-1.2.1&q=80&w=2000" />
              <br />
              <h2> Portfolio site</h2>
              <p className="paraDetails">This is a simple Portfolio.</p>
            </Link>
          </div>
          <div className="project">
            <Link to="https://bardcd.netlify.app/">
              <img src="https://img.freepik.com/premium-photo/blockchain-world-connection-concept-cryptocurrency-business_191555-4850.jpg" />
              <br />
              <h2>Find Details of Countries</h2>
              <p className="paraDetails">
                Where you can find your countries details.
              </p>
            </Link>
          </div>
          <div className="project">
            <Link to="https://confessnote1.netlify.app/">
              <img src="https://4.bp.blogspot.com/-dIEV577hFg4/U20DZ14eCLI/AAAAAAAAMag/W-t6kWuNlDY/s1600/bigstock-Confession-Concept--42406879.jpg" />
              <br />
              <h2>Confession Note</h2>
              <p className="paraDetails">
                Confessd Note will remain for only 24 hrs.
              </p>
            </Link>
          </div>
          <div className="project">
            <Link to="https://image-gallery-sand-ten.vercel.app/">
              <img src="https://contentadmin.vanartgallery.bc.ca/wp-content/uploads/2023/06/MAG_ConceptionsofWhite_036_1280px.jpg" />
              <br />
              <h2>Image Gallery</h2>
              <p className="paraDetails">There are images.</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProjects;
