import { HeartHandshake, ShieldCheck, CircleCheck } from "lucide-react";
import "./values.scss";

const Values = () => {
  return (
    <section className="values-section">
      <div className="container">
        <div className="values-header">
          <span className="section-eyebrow">OUR VALUES</span>

          <h2>What We Stand For</h2>

          <p>
            The principles that guide how we serve our customers and handle
            every vehicle entrusted to us.
          </p>
        </div>

        <div className="values-grid">
          <article className="value-item">
            <div className="value-icon">
              <HeartHandshake size={28} strokeWidth={1.8} />
            </div>

            <h3>Customer First</h3>

            <p>
              We put our customers at the center of every decision and every
              journey.
            </p>
          </article>

          <article className="value-item">
            <div className="value-icon">
              <ShieldCheck size={28} strokeWidth={1.8} />
            </div>

            <h3>Safety</h3>

            <p>
              We treat every vehicle with care and follow a safety-focused
              transportation process.
            </p>
          </article>

          <article className="value-item">
            <div className="value-icon">
              <CircleCheck size={28} strokeWidth={1.8} />
            </div>

            <h3>Reliability</h3>

            <p>
              We believe in dependable service, clear communication, and doing
              what we promise.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Values;