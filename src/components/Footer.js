import React from "react";
import "../styles/Footer.css";
import logoImage from "../assets/logo.png"; // Ensure to import your logo image

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="scheduleConsultationButtonContainer">
        <div className="rectangle"></div>
        <button>Schedule a free consultation</button>
      </div>

      <div className="taglineWealthFutures">
        <h1>Building wealth, creating futures.</h1>
        <p>
          Trusted financial consulting firm providing expert guidance and
          personalized solutions to help clients unlock their full financial
          potential.
        </p>
      </div>
      <footer className="footer">
        <div className="footer-column logo">
          <img src={logoImage} alt="Logo" className="footer-logo" />
        </div>
       
        <div className="footer-last">
        <div className="footer-column footer-column-flex-start">
          <h4>Personality Development</h4>
          <ul>
            <li>DMIT</li>
            <li>Midbrain Activation</li>
            <li>Personality Development</li>
            <li>Law of Attraction</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Financial Services</h4>
          <ul>
            <li>Financial Planning</li>
            <li>Wealth Management</li>
            <li>Tax and Estate Planning</li>
            <li>Industries</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 style={{ color: "white" }}>Privacy</h4>
          <ul>
            <li>Terms of Use</li>
            <li>© 2024 Life Signify.</li>
          </ul>
        </div>
        </div>
       
      
      </footer>
      <div className="footer-column map">
          <div className="map-placeholder">Map Here</div>
        </div>
    </div>
  );
};

export default Footer;
