import "./servicesDetail.scss";

const ServiceDetail = ({
  name,
  description,
  features,
  image,
  imagePosition,
}) => {
  return (
    <section className={`service-detail ${imagePosition}`}>
      <div className="container">
        <div className="service-detail-content">
          <div className="service-detail-image">
            <img src={image} alt={name} />
          </div>

          <div className="service-detail-text">
            <span className="section-eyebrow">OUR SERVICES</span>

            <h2>{name}</h2>

            <p>{description}</p>

            <ul className="service-detail-features">
              {features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-icon">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;