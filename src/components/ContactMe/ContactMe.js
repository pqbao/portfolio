import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import emailIcon from "../../assets/images/mail.png";
import locationIcon from "../../assets/images/location.png";
import phoneIcon from "../../assets/images/phone.png";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <ContactInfoCard iconUrl={emailIcon} text="phanquocbao201@gmail.com" />
        <ContactInfoCard
          iconUrl={locationIcon}
          text="District 7, Ho Chi Minh City"
        />
        <ContactInfoCard iconUrl={phoneIcon} text="0866 997 661" />
      </div>
    </section>
  );
};

export default ContactMe;
