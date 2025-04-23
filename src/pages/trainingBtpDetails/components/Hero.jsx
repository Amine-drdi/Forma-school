import React from "react";

const Hero = ({  formation }) => {
  return (
    <section className="relative bg-[#e8f0fc] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-16 md:py-24">
        {/* Texte */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
            {formation.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            {formation.description}
          </p>
        </div>

        {/* Image */}
        <div className="w-full h-64 md:h-96 relative">
          <img
            src={formation.image}
            alt="Illustration de la formation"
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
