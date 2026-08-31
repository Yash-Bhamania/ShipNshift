import { Phone, Mail } from "lucide-react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          <div className="footer-brand">
            <h2>ShipNShift</h2>

            <p>
              Safe and reliable vehicle transportation designed to make
              every move simple and stress-free.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <h3>Our Services</h3>

            <a href="#open-transport">Open Transport</a>
            <a href="#enclosed-transport">Enclosed Transport</a>
            <a href="#door-to-door">Door-to-Door</a>
            <a href="#long-distance">Long Distance</a>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>

            <a href="tel:+10000000000">
              <Phone size={18} />
              <span>+1 (000) 000-0000</span>
            </a>

            <a href="mailto:info@shipnshift.com">
              <Mail size={18} />
              <span>info@shipnshift.com</span>
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 ShipNShift. All rights reserved.</p>

          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;