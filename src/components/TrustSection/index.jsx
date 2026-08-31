import React from "react";

import './trustsection.scss'


const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-header">
          <span className="section-eyebrow">MOVING MADE SIMPLE</span>

          <h2>Reliable Vehicle Transportation You Can Trust</h2>
          <p>
            Whether you're moving across the city or across the country,
            ShipNShift makes vehicle transportation safe, simple, and
            stress-free.
          </p>
        </div>
        <div className="trust-features">
          <div className="trust-feature">
            <h3>Safe & Secure</h3>
            <p>
              Your vehicle is handled with care from pickup to delivery.
            </p>
          </div>

          <div className="trust-feature">
            <h3>Reliable Transportation</h3>
            <p>
              Professional service designed to keep your move smooth and dependable.
            </p>
          </div>

          <div className="trust-feature">
            <h3>Door-to-Door Service</h3>
            <p>
              Convenient vehicle pickup and delivery with less hassle for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
