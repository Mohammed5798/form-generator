import React from "react";

const Card = ({ icon, title, description, className }) => {

  return (
    <div className={`bg-white border border-gray-300 rounded-lg p-4 flex items-center space-x-3 shadow mx-16 ${className}`} >
      {icon}
        <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
  );
};

export default Card;
