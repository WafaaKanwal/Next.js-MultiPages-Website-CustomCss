import Image from "next/image";
import React from "react";

const services = [
  {
    id: 1,
    name: "Haircuts & Styling",
    image: "/images/hair.jpg",
    description: "Professional haircuts and styling to suit your unique look.",
  },
  {
    id: 2,
    name: "Hair Coloring",
    image: "/images/color.jpg",
    description: "Add color or highlights to express your style.",
  },
  {
    id: 3,
    name: "Hair Treatments",
    image: "/images/treat.webp",
    description: "Revitalize your hair with our nourishing treatments.",
  },
  {
    id: 4,
    name: "Facials & Skincare",
    image: "/images/skin.png",
    description: "Rejuvenate your skin with our facial treatments.",
  },
  {
    id: 5,
    name: "Makeup",
    image: "/images/makeup.png",
    description: "Perfect makeup application for every occasion.",
  },
  {
    id: 6,
    name: "Manicure & Pedicure",
    image: "/images/menipedi.jpg",
    description: "Keep your hands, feet and nails healthy and stylish.",
  },
  {
    id: 7,
    name: "Waxing & Threading",
    image: "/images/wax.png",
    description: "Smooth and flawless skin with our services.",
  },
  {
    id: 8,
    name: "Bridal Packages",
    image: "/images/bride.jpg",
    description: "Customized packages to make your special day perfect.",
  },
];

export default function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <Image
              src={service.image}
              alt={service.name}
              width={300}
              height={200}
              className="service-image"
            />
            <h2 className="service-name">{service.name}</h2>
            <p className="service-description">{service.description}</p>
            <a href="#" className="service-link">
              View More →
            </a>
            <button className="book-button">Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
}
