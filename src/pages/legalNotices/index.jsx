import React from "react";

const LegalNotices = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Mentions légales
          </h1>
          <p className="mt-2 text-gray-500">Dernière mise à jour : 16/03/2025</p>
        </div>

        {/* Publisher Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="bg-primary/10 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
            Éditeur du site
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              Le présent site est édité, hébergé et géré par la société Forma school, un organisme de formation
              dédié à la montée en compétences des professionnels et des entreprises.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Adresse du siège social :</p>
                  <p className="text-gray-600">IMMEUBLE D, 128 RUE LA BOETIE, 75008 PARIS</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">Téléphone :</p>
                  <p className="text-gray-600">07 56 82 86 00</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">E-mail :</p>
                  <p className="text-gray-600">contact@formaschool.fr</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800">SIRET :</p>
                  <p className="text-gray-600">932 315 914 00014</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Rights Section */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-6 flex items-center">
            <span className="bg-primary/10 p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            Droits des utilisateurs
          </h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 mb-6">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Droit d'accès",
                  description: "Vous pouvez demander une copie de vos données personnelles.",
                  icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                },
                {
                  title: "Droit de rectification",
                  description: "Vous pouvez corriger ou mettre à jour vos informations.",
                  icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                },
                {
                  title: "Droit à l'effacement",
                  description: "Vous pouvez demander la suppression de vos données.",
                  icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                },
                {
                  title: "Droit d'opposition",
                  description: "Vous pouvez refuser le traitement de certaines données.",
                  icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                },
                {
                  title: "Droit à la portabilité",
                  description: "Vous pouvez récupérer vos données sous un format lisible.",
                  icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                }
              ].map((right, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={right.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{right.title}</h3>
                    <p className="text-gray-600">{right.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Besoin d'aide ?</h2>
            <p className="text-gray-700">
              Pour toute question ou demande de clarification supplémentaire, veuillez nous contacter par courriel à {' '}
              <a href="mailto:contact@formaschool.fr" className="text-primary font-medium hover:underline">
                contact@formaschool.fr
              </a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LegalNotices;