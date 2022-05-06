import React from "react";
import Banner from "../../components/Banner";
import Contact_Component from "../../components/Contact";
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer";
function Contact() {
  return (
    <div className="w-screen overflow-hidden relative home-component home-main">
      <Header />
      <main>
          <Banner isContact = {true}  />
          <Contact_Component />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;