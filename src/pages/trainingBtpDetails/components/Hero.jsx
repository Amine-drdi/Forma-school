import React, { useEffect, useRef, useState } from "react";
import FixedTab from "../components/FixedTab";
import InscriptionForm from "../components/InscriptionForm";
import EligibilityForm from "../components/EligibilityForm";
const Hero = ({  formation }) => {

   const [showInscriptionForm, setShowInscriptionForm] = useState(false);
    const [showEligibilityForm, setShowEligibilityForm] = useState(false);
      const [isReached, setIsReached] = useState(false);
        const [toggleResults, setToggleResults] = useState("Description");
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
          <button 
            onClick={() => setShowInscriptionForm(true)}
            className="bg-primary hover:bg-secondary hover:text-primary border border-transparent overflow-hidden text-white font-medium py-3 px-6 mt-8 rounded-lg transition-colors hover:border-primary"
          >
            S'inscrire à la formation
          </button>
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

       <div
        className={`fixed top-0 left-0 w-full z-[1500] ${
          isReached ? "translate-y-0" : "-translate-y-full"
        } duration-700 ease-in-out`}
      >
        <FixedTab
          setShowInscriptionForm={setShowInscriptionForm}
          toggleResults={toggleResults}
          setToggleResults={setToggleResults}
          formation ={formation}
        />
      </div>

       {showInscriptionForm && (
        <InscriptionForm setShowInscriptionForm={setShowInscriptionForm}
        formation ={formation}
        />
      )}
      {showEligibilityForm && (
        <EligibilityForm setShowEligibilityForm={setShowEligibilityForm} 
        formation ={formation}
        />
      )}
    </section>
    
  );
};

export default Hero;
