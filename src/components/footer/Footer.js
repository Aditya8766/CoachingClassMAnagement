import "./footer.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React, { useState } from "react";
import MapContainer from "./map/Map";

function Footer() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Number:", number);
    console.log("Message:", message);

    const whatsappMessage = `Hi, this is ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setName("");
    setNumber("");
    setMessage("");
  };

  return (
    <div className="footer-container">
      <div className="footer-contact-section">
        <div className="footer-contact-info">
          <address className="contact-info">
            <LocationOnIcon className="contact-info-icon" />
            <p>
              sr.no. 36/1, ultra smart abacus, yashwant nagar, lane A, kharadi
              road , pune 411014
            </p>
          </address>
          <div className="contact-info">
            <CallIcon className="contact-info-icon" />
            <p>8208115541</p>
          </div>
          <div className="contact-info">
            <EmailIcon className="contact-info-icon" />
            <p>ultrasmartabacus@gmail.com</p>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Whatsapp mobile number:</label>
              <input
                type="tel"
                id="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="map-container">
          <div className="map">
            <MapContainer />
          </div>
        </div>
      </div>
      <div className="footer-last-section">
        <div className="footer-links">
          <a href="https://www.instagram.com">
            <InstagramIcon className="footer-icons" />
          </a>
          <a href="https://www.twitter.com">
            <TwitterIcon className="footer-icons" />
          </a>
          <a href="https://www.linkedin.com">
            <LinkedInIcon className="footer-icons" />
          </a>
        </div>
        <p>© 2023 ABACUS</p>
      </div>
    </div>
  );
}

export default Footer;
