// components/MobileServicesDropdown.tsx
import React from "react";
import { servicesData } from "../data/servicesData";

const MobileServicesDropdown: React.FC = () => {
  return (
    <div className="mt-2 pl-4 overflow-scroll" >
      {servicesData.map((category) => (
        <div key={category.title} className="mb-4">
          <h4 className="font-bold text-sm text-gray-700 mb-1">{category.title}</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            {category.items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block hover:text-blue-600">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MobileServicesDropdown;
