import React from "react";
import Banner from "../../components/Banner";
import Contact_Component from "../../components/Conntact";
// import Header from "../../components/header";
// import Footer from "../../components/footer";
function Contact() {
    return (
      <div className="w-screen overflow-hidden relative home-component home-main">
       
        <main>
            <Banner isContact = {true}  />
            <Contact_Component />
        </main>
    
      </div>
    );
  }
  
  export default Contact;