import React from "react";
import Navbar from "../components/Navbar";
import HomeLogo from "../pages/HomeLogo";
import Footer from "../pages/Footer";
import SelfMe from "../pages/SelfMe";
import MySkills from "../pages/MySkills";
import MyProjects from "../pages/MyProjects";
import ContactForm from "../pages/ContactForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeLogo />
      <SelfMe />
      <MySkills />
      <MyProjects />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
