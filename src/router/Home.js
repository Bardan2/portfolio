import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeLogo from "../components/HomeLogo";
import Footer from "../components/Footer";
import SelfMe from "../components/SelfMe";
import MySkills from "../components/MySkills";
import MyProjects from "../components/MyProjects";
import ContactForm from "../components/ContactForm";

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
