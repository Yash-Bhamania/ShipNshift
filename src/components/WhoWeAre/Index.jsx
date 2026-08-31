import "./whoWeAre.scss";
import image from '../../assets/images/about/vehicle-transport.png'

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="container">
        <div className="who-we-are-content">
          <div className="who-we-are-image">
            <img
              src= {image}
              alt="Vehicle being transported"
            />
          </div>

          <div className="who-we-are-text">
            <span className="section-eyebrow">WHO WE ARE</span>

            <h2>Moving Vehicles With Purpose</h2>

            <p>
              ShipNShift is focused on making vehicle transportation simple,
              reliable, and stress-free.
            </p>

            <p>
              From pickup to delivery, we believe customers should have a
              clear, dependable experience when moving their vehicles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;