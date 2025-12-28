// TeamMemberCard.tsx
import React from "react";

interface TeamMemberCardProps {
  image: string;
  name: string;
  position: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, position }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-4 transition-transform hover:scale-105">
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500">{position}</p>
    </div>
  );
};

export default TeamMemberCard;
