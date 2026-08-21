import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-eyebrow">PREMIUM VEHICLE TRANSPORTATION</span>
          <h1>
            Your <span>Vehicle.</span>
            <br /> Our <span>Responsibility.</span>
          </h1>

          <p>
            
            Safe, reliable vehicle transportation designed to make every move
            simple and stress-free.
          </p>

          <div className="hero-action">
            <button type="button">Get a Quote</button>
            <a href="#service">Explore More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
