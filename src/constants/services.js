import openTransportImage from '../assets/images/services/open-transport.png';
import EnclosedVehicle from '../assets/images/services/Enclosed-Vehicle .png';
import doorToDoor from '../assets/images/services/doorToDoor.png'
import longDistance from '../assets/images/services/longDistance.png'


const services = [
  {
    name: "Open Vehicle Transport",
    description:
      "Our open vehicle transport is the most popular and cost-effective solution for most standard vehicles. Your vehicle is safely secured on an open carrier and delivered to your destination.",
    features: [
      "Cost-effective and reliable",
      "Suitable for most standard vehicles",
      "Real-time tracking and updates",
    ],
    image: openTransportImage,
    imagePosition: "left",
  },

  {
    name: "Enclosed Vehicle Transport",
    description:
      "For luxury, classic, or high-value vehicles, our enclosed transport provides maximum protection from weather, road debris, and other external elements.",
    features: [
      "Maximum protection and security",
      "Ideal for luxury, classic & exotic vehicles",
      "Enclosed trailer with soft tie-downs",
    ],
    image: EnclosedVehicle,
    imagePosition: "right",
  },

  {
    name: "Door-to-Door Transport",
    description:
      "Our door-to-door service provides convenient vehicle transportation from your pickup location directly to your chosen destination.",
    features: [
      "Convenient pickup and delivery",
      "Less handling of your vehicle",
      "Personalized transportation experience",
    ],
    image: doorToDoor,
    imagePosition: "left",
  },

  {
    name: "Long-Distance Transport",
    description:
      "Whether you're moving across the state or across the country, our long-distance transportation service is designed to keep your vehicle moving safely and efficiently.",
    features: [
      "Reliable long-distance transportation",
      "Flexible scheduling",
      "Clear communication throughout the journey",
    ],
    image: longDistance,
    imagePosition: "right",
  },
];

export default services;