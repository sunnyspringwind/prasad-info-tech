import React from "react";
import bigeducation from "../assets/img/clients/bigeducation.jpg";
import hamrormade from "../assets/img/clients/hamrormade.jpg";
import modularkitchen from "../assets/img/clients/modularkitchen.jpg";
import riseofworld from "../assets/img/clients/riseofworld.jpg";
import supreme from "../assets/img/clients/supreme.jpg";
import kalihomedecor from "../assets/img/clients/kalihomedecor.svg"
import frontline from "../assets/img/clients/frontline.jpg"
import sargrambrass from "../assets/img/clients/sargambrass.jpg"
import paceluxury from "../assets/img/clients/paceluxury.webp"


interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
    { name: "Big Education", logo: bigeducation },
    { name: "Hamro Made", logo: hamrormade },
    { name: "Modular Kitchen", logo: modularkitchen },
    { name: "Rise of World", logo: riseofworld },
    { name: "Supreme", logo: supreme },
    {name: "Kali Home Decor", logo: kalihomedecor},
    {name: "Frontline Recruitment Pvt. Ltd.", logo: frontline},
    {name: "Sargram Brass", logo: sargrambrass},
    {name: "Pace Luxury Studio", logo: paceluxury}
    
];

// const stats = [
//   { value: "20+", label: "Job Placement Partners" },
//   { value: "10+", label: "Local Businesses" },
//   { value: "5+", label: "IT Club Partners" },
//   { value: "10+", label: "Extra Organizations" },
// ];

const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We team up with top organizations and companies to provide
            outstanding results and enhance businesses in multiple industries.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center relative group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-white via-gray-50 to-blue-600/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg border border-gray-100 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-20 h-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <div
                className="mt-2 text-xs font-semibold text-gray-700 text-center truncate w-24"
                title={partner.name}
              >
                {partner.name}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Building Success Through Strategic Partnerships
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PartnersSection;
