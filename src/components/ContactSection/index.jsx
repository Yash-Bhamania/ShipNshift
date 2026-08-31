import { Phone, Mail, MapPin } from "lucide-react";
import "./contactSection.scss";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">

          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <div className="contact-info">
            <span className="section-eyebrow">GET IN TOUCH</span>

            <h2>We’re Here to Help</h2>

            <p>
              Have a question about vehicle transportation? Get in touch with
              our team and we'll be happy to help.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>

                <div>
                  <span>Phone</span>
                  <a href="tel:+910000000000">
                    +91 00000 00000
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <a href="mailto:info@shipnshift.com">
                    info@shipnshift.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              CONTACT FORM
          ========================= */}

          <div className="contact-form-wrapper">
            <span className="section-eyebrow">SEND US A MESSAGE</span>

            <h2>Let’s Talk About Your Vehicle</h2>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;