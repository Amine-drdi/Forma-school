import React from 'react';
import { finance } from '../../assets/data/trainings';
import { FaUserTie, FaCheckCircle } from 'react-icons/fa';
import { MdOutlineMonetizationOn } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import logo from '../../assets/images/fiphfp.jpg'
const Tab = () => {
  const found = finance.find((element) => element.id === 300);

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

        {/* What is FIPHFP Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Qu'est-ce que le FIPHFP ?
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto space-y-4">
            <p>
              Le <strong>Fonds pour l'insertion des personnes handicapées dans la fonction publique (FIPHFP)</strong> accompagne les employeurs publics dans leurs démarches pour favoriser l'insertion et le maintien dans l'emploi des personnes en situation de handicap.
            </p>
            <p>
              Créé en 2006, le FIPHFP propose des aides financières, des conseils personnalisés et des outils pratiques pour atteindre l'objectif de 6 % de taux d'emploi de personnes handicapées. Que vous soyez une administration, une collectivité territoriale ou un établissement public, le FIPHFP vous soutient dans la mise en œuvre de politiques inclusives, la formation des agents et l'aménagement des postes de travail.
            </p>
            <p>
              Le FIPHFP collecte les contributions financières des employeurs publics qui ne respectent pas l'obligation légale d'employer au moins 6 % de personnes en situation de handicap. Ces fonds sont ensuite utilisés pour financer diverses aides destinées à compenser le handicap en milieu professionnel et en formation.
            </p>
            <p className="font-medium text-blue-800">
              Le FIPHFP joue ainsi un rôle essentiel dans la promotion de l'emploi des personnes en situation de handicap dans la fonction publique, en soutenant les employeurs publics dans leurs démarches d'inclusion et en contribuant à l'accessibilité universelle.
            </p>
          </div>
        </section>

        {/* FIPHFP Missions Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Les missions du FIPHFP
          </h2>
          <div className="prose prose-lg text-gray-700 mb-6 max-w-4xl mx-auto">
            <p>
              Le FIPHFP est un catalyseur de l'action publique en matière d'emploi des personnes en situation de handicap. Sa mission : impulser une dynamique et inciter les employeurs publics à agir en favorisant le recrutement, l'accompagnement et le maintien dans l'emploi au sein des trois Fonctions publiques.
            </p>
          </div>
          <ul className="space-y-4 max-w-4xl mx-auto">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Accessibilité numérique</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Aménagement de poste</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Formation</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Maintien dans l'emploi</span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">Recrutement</span>
            </li>
          </ul>
        </section>

        {/* FIPHFP Objectives Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Objectifs du FIPHFP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
              <FaUserTie className="text-blue-500 text-3xl mb-2" />
              <h3 className="font-semibold text-gray-800 text-center">Accompagner les employeurs publics</h3>
            </div>
            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
              <MdOutlineMonetizationOn className="text-green-600 text-3xl mb-2" />
              <h3 className="font-semibold text-gray-800 text-center">Financer des actions</h3>
            </div>
            <div className="flex flex-col items-center bg-gray-50 p-4 rounded-lg">
              <IoInformationCircleSharp className="text-yellow-600 text-3xl mb-2" />
              <h3 className="font-semibold text-gray-800 text-center">Sensibiliser et informer</h3>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Partenariats et initiatives
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto">
            <p>
              Le FIPHFP continue également de développer des partenariats pour promouvoir l'inclusion. Par exemple, une nouvelle convention a été signée avec le Département de la Seine-Saint-Denis en février 2025, visant à proposer un accompagnement personnalisé et à favoriser l'inclusion numérique des agents en situation de handicap.
            </p>
            <p>
              Ces initiatives illustrent l'engagement constant du FIPHFP à promouvoir une fonction publique plus inclusive et à améliorer l'accompagnement des personnes en situation de handicap dans leur parcours professionnel.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tab;