import { Phone, Mail, MapPin } from "lucide-react";
import "./contactSection.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import contactSchema from "../../schemas/contactSchema";
import { useState } from "react";

const ContactSection = () => {
  const [isSubmited, setIsSubmited] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmited(true);
  };

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
                  <a href="tel:+910000000000">+91 00000 00000</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <a href="mailto:info@shipnshift.com">info@shipnshift.com</a>
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

            {isSubmited ? (
              <div className="form-success">
                <h3>Message Sent Successfully!</h3>

                <p>
                  Thank you for contacting ShipNShift. We'll get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <span className="form-error">{errors.name.message}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      placeholder="Your email"
                    />
                    {errors.email && (
                      <span className="form-error">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      placeholder="Your phone number"
                    />
                    {errors.phone && (
                      <span className="form-error">{errors.phone.message}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      {...register("subject")}
                      placeholder="Subject"
                    />
                    {errors.subject && (
                      <span className="form-error">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>

                  <textarea
                    id="message"
                    {...register("message")}
                    rows="5"
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && (
                    <span className="form-error">{errors.message.message}</span>
                  )}
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
