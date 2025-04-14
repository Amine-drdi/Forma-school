import React from 'react';

export default function AllTrainings() {
  return (
    <div className="flex justify-center items-center min-h-[400px] py-10 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-500 max-w-5xl w-full animate-fade-in">
        {/* Texte */}
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Formation BTP : Bâtir des compétences solides
          </h3>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed">
            Apprenez à maîtriser les méthodes et outils du bâtiment : lecture de plans, sécurité, matériaux, techniques de construction et gestion de chantier.
          </p>
          <a
            href="/formations/categorie/btp"
            className="bg-[#c86104] text-white px-6 py-2 rounded-full w-fit text-sm hover:bg-[#aa5103] transition-colors"
          >
            Découvrir la formation
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/images/Formation_BTP.jpg"
            alt="Chantier BTP"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
