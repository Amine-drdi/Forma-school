import React from 'react';
import { finance } from '../../assets/data/trainings';
import { FaUserTie, FaBriefcase, FaUserGraduate, FaUserClock, FaCheckCircle } from 'react-icons/fa';
import logo from '../../assets/images/cpf.png'
const Tab = () => {
  const found = finance.find((element) => element.id === 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">

          <div className="flex justify-center">
            {found && (
              <img
                className="w-full h-auto  object-cover shadow-xl border-4 border-white"
                src={logo}
                alt={found.title}
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        </div>

        {/* What is CPF Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Qu'est-ce que le CPF ?
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto">
            <p>
              Le <strong>Compte Personnel de Formation (CPF)</strong> permet à toute personne active d'accumuler des droits à la formation. Chaque année, vous cumulez des crédits qui peuvent financer une formation certifiante.
            </p>
          </div>
        </section>

        {/* How to use CPF Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Comment utiliser votre CPF ?
          </h2>
          <div className="max-w-4xl mx-auto">
            <ol className="prose prose-lg text-gray-700 list-decimal space-y-2 pl-6">
              <li>Se connecter sur <a href="https://www.moncompteformation.gouv.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">MonCompteFormation</a></li>
              <li>Choisir une formation éligible</li>
              <li>S'inscrire directement en ligne</li>
              <li>Compléter le financement si nécessaire</li>
            </ol>
          </div>
        </section>

        {/* Who can benefit Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Qui peut bénéficier du CPF ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <FaUserTie className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="text-gray-700">Salariés du secteur privé et public</span>
            </div>
            <div className="flex items-start">
              <FaBriefcase className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="text-gray-700">Travailleurs indépendants et professions libérales</span>
            </div>
            <div className="flex items-start">
              <FaUserClock className="text-yellow-500 mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="text-gray-700">Demandeurs d'emploi (sous certaines conditions)</span>
            </div>
            <div className="flex items-start">
              <FaUserGraduate className="text-purple-500 mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="text-gray-700">Jeunes sortis du système scolaire et en recherche d'emploi</span>
            </div>
          </div>
        </section>

        {/* Why use CPF Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Pourquoi utiliser votre CPF pour nos formations ?
          </h2>
          <ul className="space-y-4 max-w-4xl mx-auto">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Financement accessible sans avance de frais
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Formations adaptées aux besoins des professionnels du bâtiment
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Diplômes et certifications reconnues par l'État
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Apprentissage en ligne ou en présentiel selon vos préférences
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Tab;