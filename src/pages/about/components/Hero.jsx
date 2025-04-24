import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Texte */}
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700">
            Découvrez Forma school
          </h1>
          <p className="text-lg sm:text-xl font-medium text-gray-900">
            Parcourez les options disponibles et trouvez celle qui correspond parfaitement à vos attentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink
              to="/formations/categorie/btp"
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-secondary hover:text-primary border border-transparent hover:border-primary transition-all duration-500 ease-in-out w-fit"
            >
              Découvrez nos formations
            </NavLink>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/ouvrier.png"
            alt="Ouvrier"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
