import React from 'react';
import { finance } from '../../assets/data/trainings';
import { FaCheckCircle } from 'react-icons/fa';
import logo from '../../assets/images/logo-agefiph.png'

const Tab = () => {
  const found = finance.find((element) => element.id === 500);

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

        {/* What is Agefiph Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Qu'est-ce que l'Agefiph ?
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto">
            <p>
              <strong>L'Association de gestion du fonds pour l'insertion des personnes handicapées (Agefiph)</strong> est un organisme paritaire français institué par la loi du 10 juillet 1987. Son objectif principal est de favoriser l'insertion professionnelle et le maintien dans l'emploi des personnes handicapées dans les entreprises du secteur privé.
            </p>
          </div>
        </section>

        {/* RQTH Benefits Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Les avantages de la reconnaissance de la qualité de travailleur handicapé (RQTH)
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto space-y-4">
            <p>
              Obtenir la reconnaissance en tant que travailleur handicapé permet d'accéder à divers dispositifs facilitant l'intégration et le maintien dans l'emploi des personnes en situation de handicap.
            </p>
            <p>
              Un travailleur handicapé est défini comme toute personne dont l'accès à l'emploi est limité en raison d'une altération physique, sensorielle, mentale ou psychique. La demande de reconnaissance (RQTH) s'effectue auprès de la Commission des droits et de l'autonomie des personnes handicapées (CDAPH).
            </p>
            <p className="font-medium text-blue-800">
              Cette reconnaissance ouvre droit à un accès prioritaire aux aides à l'emploi et à la formation, ainsi qu'à des aménagements adaptés aux dispositifs existants.
            </p>
          </div>
        </section>

        {/* Legal Framework Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
            Notre Référente Handicap peut vous accompagner
          </h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Ce que dit la loi
          </h3>
          <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto space-y-4">
            <p>
              La loi du 11 février 2005 pour l'égalité des droits et des chances des personnes handicapées définit le handicap comme toute limitation d'activité ou restriction de participation à la vie en société subie dans son environnement.
            </p>
            <p>
              Cette loi énonce des principes fondamentaux, dont le droit à la compensation des conséquences du handicap et le principe d'accessibilité généralisé. Depuis lors, des évolutions ont été opérées, tant au niveau des exigences vis-à-vis des opérateurs de formation que des dispositifs proposés par l'AGEFIPH.
            </p>
            <p>
              Dans la loi Avenir professionnel du 5 septembre 2018, les autorités ont exprimé leur volonté de faciliter l'accès aux formations pour les personnes en situation de handicap, plaçant ainsi cette démarche au cœur de la qualité des opérateurs de formation.
            </p>
          </div>
        </section>

        {/* Benefits of Using CPF Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Pourquoi utiliser votre CPF pour nos formations ?
          </h2>
          <ul className="space-y-4 max-w-4xl mx-auto">
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Encourager l'identification précoce des personnes en situation de handicap dès leur arrivée au centre de formation.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Garantir un traitement équitable tout au long du processus de recrutement, de sélection et de placement, assurant un accès égal aux opportunités de formation.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Proposer activement des améliorations pour rendre les formations dispensées plus accessibles sur le plan pédagogique.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Savoir mobiliser les ressources régionales disponibles pour soutenir la compensation du handicap en formation.
              </span>
            </li>
            <li className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">
                Prévoir la transition vers la fin de la formation en fournissant aux partenaires les informations nécessaires pour faciliter l'intégration professionnelle.
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Tab;