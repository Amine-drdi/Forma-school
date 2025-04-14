import React from "react";
import { Link } from "react-router-dom";

const CategoriesCard = ({  categories, route }) => {
  return (
    <div className="w-full flex flex-col items-center">
 
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-xl">
        {categories.slice(0, 6).map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center bg-primary text-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
          >
            <cat.icon className="text-4xl mb-3" />
            <span className="text-base font-medium">{cat.label}</span>
          </div>
        ))}
      </div>

      <Link
        to={`/formations/${route}`}
        className="mt-10 px-8 py-3 bg-white text-primary font-semibold rounded-full shadow hover:bg-primary hover:text-white transition duration-300"
      >
        Voir plus
      </Link>
    </div>
  );
};

export default CategoriesCard;
