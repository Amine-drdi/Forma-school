import React from "react";
import { features } from "../../../assets/data/features";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#fef3e8] via-white to-[#fef3e8] py-20 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Pourquoi Choisir Notre Plateforme ?
        </h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          Nous mettons tout en œuvre pour vous offrir une expérience d'apprentissage unique : flexibilité, expertise et accompagnement.
        </p>
      </div>

      <div className="mt-16 space-y-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="max-w-4xl mx-auto flex items-start gap-4 p-4 sm:p-6 bg-transparent border-b border-[#f0d2b7]"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f5c7a0] text-white shrink-0 shadow">
              <feature.icon className="w-6 h-6 text-[#c86104]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {feature.name}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
