import { ShieldCheck, CircleCheck, Eye, HeartHandshake } from "lucide-react";
import "./whyChoose.scss";

const WhyChoose = () => {
  return (
    <section className="why-choose-section">
      <div className="container">

        <div className="why-choose-header">
          <span className="section-eyebrow">WHY CHOOSE SHIPNSHIFT</span>

          <h2>Built Around Your Peace of Mind</h2>

          <p>
            We combine safe transportation, reliable service, and clear
            communication to make moving your vehicle easier.
          </p>
        </div>

        <div className="why-choose-grid">

          <article className="why-choose-item">
            <ShieldCheck size={28} strokeWidth={1.8} />

            <h3>Safe & Secure</h3>

            <p>
              Your vehicle is handled with care from pickup to delivery.
            </p>
          </article>

          <article className="why-choose-item">
            <CircleCheck size={28} strokeWidth={1.8} />

            <h3>Reliable Service</h3>

            <p>
              Professional transportation designed to keep your move smooth
              and dependable.
            </p>
          </article>

          <article className="why-choose-item">
            <Eye size={28} strokeWidth={1.8} />

            <h3>Transparent Process</h3>

            <p>
              Clear communication and straightforward service at every step
              of your vehicle's journey.
            </p>
          </article>

          <article className="why-choose-item">
            <HeartHandshake size={28} strokeWidth={1.8} />

            <h3>Customer Focused</h3>

            <p>
              Your convenience and peace of mind remain at the center of
              everything we do.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;