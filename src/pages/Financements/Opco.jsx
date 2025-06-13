import React from 'react';
import { finance } from '../../assets/data/trainings';
import logo from '../../assets/images/OPCO.png'
const Tab = () => {
  const found = finance.find((element) => element.id === 200);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center">
            {found && (
              <img
                className="w-full h-80 object-cover shadow-xl border-4 border-white"
                src={logo}
                alt={found.title}
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        </div>

        {/* What is OPCO Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Qu'est-ce qu'un OPCO ?
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto space-y-4">
            <p>
              Les <strong>OPCO (Opérateurs de Compétences)</strong> sont des organismes agréés par l'État qui ont pour mission d'accompagner les entreprises dans la formation professionnelle de leurs salariés.
            </p>
            <p>
              Ils remplacent les anciens OPCA (Organismes Paritaires Collecteurs Agréés) depuis 2019 et jouent un rôle clé dans le financement et l'optimisation des dispositifs de formation.
            </p>
            <p className="font-medium text-blue-800">
              Leur objectif est de faciliter l'accès à la formation en prenant en charge tout ou partie des frais pédagogiques, en conseillant les entreprises sur le développement des compétences et en favorisant l'apprentissage.
            </p>
          </div>
        </section>

        {/* Different OPCOs Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Les différents opérateurs OPCO
          </h2>
          <div className="prose prose-lg text-gray-700 mb-6 max-w-4xl mx-auto">
            <p>
              Il existe 11 OPCO, chacun étant rattaché à un secteur d'activité spécifique. Voici les principaux OPCO et leurs domaines d'intervention.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "AFDAS",
                description: "Opérateur de compétences des secteurs de la culture, des industries créatives, des médias, de la communication, des télécommunications, du sport, du tourisme, des loisirs et du divertissement."
              },
              {
                name: "OPCOMMERCE",
                description: "Opérateur de compétence des secteurs conventionnels des branches du commerce."
              },
              {
                name: "CONSTRUCTYS",
                description: "Opérateur de compétences du bâtiment, des travaux publics, du négoce des matériaux de construction et de bois."
              },
              {
                name: "Ocapiat",
                description: "Opérateur de compétences des entreprises et exploitations agricoles, des acteurs du territoire, des entreprises du secteur alimentaire, des professionnels des activités maritimes."
              },
              {
                name: "ATLAS",
                description: "Opérateur de compétences dans le champ des assurances, des services financiers et du conseil."
              },
              {
                name: "OPCO EP",
                description: "Opérateur de compétences des Entreprises de Proximité (EP). Pour les artisans, les professions libérales et les petites entreprises de proximité."
              },
              {
                name: "AKTO",
                description: "Opérateur des entreprises et des salariés des services à forte intensité de main-d'oeuvre."
              },
              {
                name: "OPCO 2i",
                description: "Opérateur de compétences des secteurs des industries chimiques, pharmaceutiques, du papiers-carton et de la métallurgie."
              },
              {
                name: "OPCO Cohésion Sociale (Uniformation)",
                description: "Opérateur de compétences des secteurs du champ social, services aux personnes, insertion, sport, enseignement et formation."
              },
              {
                name: "OPCO Mobilité",
                description: "Opérateur de compétences des secteurs du transport routier, maritime et des services de l'automobile."
              }
            ].map((opco, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{opco.name}</h3>
                <p className="text-gray-600">{opco.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to find your OPCO Section */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
            Comment connaître son opérateur de compétences (OPCO) ?
          </h2>
          <div className="prose prose-lg text-gray-700 mb-6 max-w-4xl mx-auto space-y-4">
            <p>
              Le regroupement des branches professionnelles autour d'un OPCO désigné s'appuie sur les critères de cohérence des métiers et des compétences, de filières, d'enjeux communs de compétences, de formation, de mobilité, de services de proximité et de besoins des entreprises.
            </p>
            <p>
              Près de 329 branches sont réparties dans 11 OPCO, au lieu des 20 OPCA qui existaient auparavant.
            </p>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-4 max-w-4xl mx-auto">
            Il existe aujourd'hui 3 principales méthodes pour connaître son opérateur de compétences :
          </h3>
          
          <ol className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                title: "Votre entreprise est déjà, selon vous, adhérente à un OPCO mais vous souhaitez le vérifier ?",
                content: "Utiliser le site <a href='https://www.cfadock.fr/' class='text-blue-600 hover:underline' target='_blank' rel='noopener noreferrer'>cfadock</a> : en entrant le SIRET de votre entreprise (sans aucun espace) sur le site, votre OPCO sera affiché."
              },
              {
                title: "Votre entreprise n'est pas encore adhérente à un OPCO ?",
                content: "Utiliser cette table de correspondance pour trouver votre OPCO grâce à votre Identifiant de Convention Collective (IDCC). Le numéro IDCC se compose de 4 chiffres et est compris entre 0001 et 9999. Il est attribué par le ministère du travail lors de la création de la convention collective et est rattaché à l'intitulé de la convention collective. Vous le trouverez généralement sur les fiches de salaire."
              },
              {
                title: "Votre entreprise n'est pas encore adhérente à un OPCO et vous n'appliquez pas ou pas encore de convention collective ?",
                content: "Vous pouvez le trouver grâce à votre secteur d'activité et la liste des opérateurs de compétences."
              }
            ].map((item, index) => (
              <li key={index} className="pl-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Tab;