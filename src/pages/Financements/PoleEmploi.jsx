import React from 'react';
import { finance } from '../../assets/data/trainings';
import { FaBuilding, FaHandsHelping } from 'react-icons/fa';
import logo from '../../assets/images/PoleEmploi.png'
const Tab = () => {
  const found = finance.find((element) => element.id === 400);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center">
            {found && (
              <img
                className="w-full h-auto object-cover shadow-xl border-4 border-white"
                src={logo}
                alt={found.title}
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        </div>

        {/* What is Pôle Emploi Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Qu'est-ce que Pôle Emploi ?
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto">
            <p>
              Pôle Emploi propose plusieurs dispositifs de financement pour les demandeurs d'emploi souhaitant suivre une formation afin d'améliorer leur employabilité et favoriser leur retour à l'emploi.
            </p>
          </div>
        </section>

        {/* Who can benefit Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Qui peut bénéficier du financement Pôle Emploi ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start bg-white p-4 rounded-lg">
              <FaBuilding className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="text-gray-700">Chômeurs inscrits à Pôle Emploi</span>
            </div>
            <div className="flex items-start bg-white p-4 rounded-lg">
              <FaHandsHelping className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="text-gray-700">Bénéficiaires de l'Aide Individuelle à la Formation (AIF)</span>
            </div>
          </div>
        </section>

        {/* Funding Types Section */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Types de financements
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Collective Devices */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dispositifs Collectifs</h3>
              <div className="prose prose-lg text-gray-700 mb-4">
                <p>
                  Gratuite pour les demandeurs d'emploi. Pour répondre aux besoins de recrutement des entreprises ou d'une branche professionnelle sur un territoire.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Action de Formation Conventionnée (AFC)</li>
              </ul>
              <p className="text-gray-700 font-medium">
                Renseignez-vous auprès de votre conseiller Pôle Emploi.
              </p>
            </div>

            {/* Individual Devices */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Dispositifs Individuels</h3>
              <div className="prose prose-lg text-gray-700 mb-4">
                <p>
                  Sur devis pour faire une demande de prise en charge financière. Pour répondre à votre besoin individuel de formation en vue d'un retour à l'emploi rapide.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Compte Personnel de Formation</li>
                <li>Aide Individuelle à la Formation (AIF)</li>
              </ul>
              <p className="text-gray-700 font-medium">
                Consultez les formations et faites votre demande. Renseignez-vous auprès de votre conseiller Pôle Emploi.
              </p>
            </div>

            {/* Recruitment Prerequisites */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Préalables au recrutement</h3>
              <div className="prose prose-lg text-gray-700 mb-4">
                <p>
                  Pour acquérir des compétences nécessaires et requises pour un poste en vue d'un recrutement.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>AFPR (Action de Formation Préalable au Recrutement)</li>
              </ul>
              <p className="text-gray-700 font-medium">
                Renseignez-vous auprès de votre conseiller Pôle Emploi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tab;