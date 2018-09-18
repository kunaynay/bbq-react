import React from "react";
import "./Contact.css";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact">
      <div className="content">
        <h1>Get in touch with us!</h1>
        <p>
          Spicy jalapeno jerky strip steak shank tongue ham turkey. Strip steak
          porchetta pork belly, burgdoggen turducken leberkas capicola shankle
          spare ribs shank ham corned beef sirloin landjaeger.{" "}
        </p>

        <div className="location">
          <div className="address">
            <h3>Our location:</h3>
            <p>
              Shop No 5 & 6, DLF Cyber Hub, Cyber City, 8th Road, Sector 24, DLF
              Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana 122002
            </p>
          </div>

          <div className="map">
            <h3>Over here!</h3>
            <img src={require('../../assests/img/map.PNG')}/>
          </div>
        </div>

        <div className="phone">
          <h3>Call Us <i className="fas fa-phone"/></h3>
          <p>(011) 555-666-8888</p>
        </div>

        <div className="centered">
          <Link to="/menu"><button>See what we have</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
