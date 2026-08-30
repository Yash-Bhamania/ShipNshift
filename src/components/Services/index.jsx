import { Truck, MapPin, ShieldCheck } from "lucide-react";
import "./sevices.scss";

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <span className="section-eyebrow">OUR SERVICES</span>
          <h2>Transportation Made Simple</h2>
          <p>
            Reliable vehicle transportation solutions designed around your
            needs, your schedule, and your peace of mind.
          </p>
        </div>
        <div className="services-grid">
          <article className="service-card">
            <div className="service-icon">
              <Truck size={28} strokeWidth={1.8} />
            </div>
            <h3>Vehicle Transportation</h3>
            <p>
              Safe and reliable transportation for moving your vehicle from one
              location to another.
            </p>
            <a href="#services">Learn More →</a>
          </article>
          <article className="service-card">
            <div className="service-icon">
              <MapPin size={28} strokeWidth={1.8} />
            </div>

            <h3>Door-to-Door Delivery</h3>

            <p>
              Convenient pickup and delivery designed to make your vehicle move
              simple and hassle-free.
            </p>

            <a href="#services">Learn More →</a>
          </article>

          <article className="service-card">
            <div className="service-icon">
              <ShieldCheck size={28} strokeWidth={1.8} />
            </div>

            <h3>Secure Vehicle Transport</h3>

            <p>
              Professional handling and secure transportation with your
              vehicle's safety as our priority.
            </p>

            <a href="#services">Learn More →</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;
