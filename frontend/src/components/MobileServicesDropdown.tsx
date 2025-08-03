// components/MobileServicesDropdown.tsx
import React from "react";
import { servicesData, type ServiceItem } from "../data/servicesData";

const MobileServicesDropdown: React.FC = () => {
  return (
    <div className="mt-2 pl-4 " >
 {servicesData.map((service: ServiceItem) => (
    <div key={service.label} className="mb-4">
      {/* <h4 className="font-bold text-sm text-gray-700 mb-1">{service.catTitle}</h4> */}
      <ul className="space-y-1 text-sm text-gray-600"> 
          <li key={service.href}>
            <a href={service.href} className="block hover:text-blue-600">
              {service.label}
            </a>
          </li>
     
      </ul>
    </div>
  ))}
  </div>
  );
};

export default MobileServicesDropdown;
