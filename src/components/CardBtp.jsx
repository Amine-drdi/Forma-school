import React from "react";
import { NavLink } from "react-router-dom";
import { FaEuroSign } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

const Card = ({ imageUrl, title, duration, id }) => {
  return (
    <NavLink
      to={`/formations/btp/${id}`}
      className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-full flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>

        <div className="flex justify-between text-sm text-gray-600">
       
          <div className="flex items-center gap-2">
            <MdTimer className="text-[#c86104]" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
