import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../Navbar/Navbar";

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
