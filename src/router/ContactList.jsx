import React from "react";
import ContactForm from "../pages/ContactForm";
import Footer from "../pages/Footer";
import Navbar from "../components/Navbar";

const ContactList = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactList;
