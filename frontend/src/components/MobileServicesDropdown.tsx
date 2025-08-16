// components/MobileServicesDropdown.tsx
import React from "react";
import { servicesData, type ServiceItem } from "../data/servicesData";
import { Link, NavLink } from "react-router-dom";

const MobileServicesDropdown: React.FC = () => {
  return (
    <div className="mt-2 pl-4 ">
      <div className="space-y-1 text-sm text-gray-600 mb-4 "><NavLink
        to="/services"
        className={({ isActive }) =>
          `hover:text-blue-600 ${
            isActive ? "text-blue-600" : ""
          }`
        }
      >
        All Services
      </NavLink></div>
      {servicesData.map((service: ServiceItem) => (
        <div key={service.label} className="mb-4">
          {/* <h4 className="font-bold text-sm text-gray-700 mb-1">{service.catTitle}</h4> */}
          <ul className="space-y-1 text-sm text-gray-600">
            <li key={service.href}>
                <Link
                to={`/services/${service.slug}`}
                className="block hover:text-blue-600"
                >
                {service.label}
                </Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MobileServicesDropdown;
