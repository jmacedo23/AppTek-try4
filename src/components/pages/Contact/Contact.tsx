import React from "react";
import Cform from "./Cform";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <div className="contact-info-container">
        <p className="reach-us">Reach us at:</p>
        <p className="contact-info">
          Email: <a href="mailto:info@approachtek.com">info@approachtek.com</a>
        </p>
        <p className="contact-info">
          Phone: <a href="tel:+13037186348">(303) 718-6348</a>
        </p>
      </div>
      <div className="contact-form-container">
        <h2>Or Send Us a Line</h2>
        <Cform />
      </div>
    </div>
  );
};

export default Contact;
