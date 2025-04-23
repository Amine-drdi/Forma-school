import React from "react";
import { FaClock, FaHashtag, FaEuroSign, FaEnvelope } from "react-icons/fa";

const Recap = ({ formation }) => {
  return (
    <div className="bg-white shadow-2xl rounded-xl p-6 md:p-10 max-w-5xl mx-auto -mt-12 z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
            <FaClock size={20} />
          </div>
          <p className="text-sm text-gray-500 font-semibold">Durée</p>
          <p className="text-lg font-bold text-gray-800">{formation.Duree}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-green-100 text-green-600 p-3 rounded-full">
            <FaHashtag size={20} />
          </div>
          <p className="text-sm text-gray-500 font-semibold">Réf. DPC</p>
          <p className="text-lg font-bold text-gray-800">{formation.DPC}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full">
            <FaEuroSign size={20} />
          </div>
          <p className="text-sm text-gray-500 font-semibold">Financements</p>
          <p className="text-lg font-bold text-gray-800">{formation.Financements}</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="bg-purple-100 text-purple-600 p-3 rounded-full">
            <FaEnvelope size={20} />
          </div>
          <p className="text-sm text-gray-500 font-semibold">Tarif</p>
          <p className="text-lg font-bold text-gray-800">Contactez-nous</p>
        </div>
      </div>
    </div>
  );
};

export default Recap;
