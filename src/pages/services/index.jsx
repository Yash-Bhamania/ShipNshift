import React from "react";
import ServicesHero from "../../components/ServicesHero";

import services from "../../constants/services";
import ServiceDetail from "../../components/ServicesDetail";
import CTA from '../../components/CTA'

const Services = () => {
  return (
    <>
      <ServicesHero />

      {services.map((service) => (
        <ServiceDetail
          key={service.name}
          name={service.name}
          description={service.description}
          features={service.features}
          image={service.image}
          imagePosition={service.imagePosition}
        />
      ))}
      <CTA/>
    </>
  );
};

export default Services;
