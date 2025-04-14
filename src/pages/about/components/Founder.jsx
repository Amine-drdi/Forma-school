import React from 'react';

const FounderProfile = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Adding more space above the component */}
      <div className="mt-24 mb-16"></div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Notre fondateur, un visionnaire engagé
          </h1>
          <h2 className="text-lg text-gray-900 mb-6">
            Emmanuel, votre partenaire de réussite
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img 
              src="/images/zeno.jpeg" 
              alt="Emmanuel Zenou - Fondateur de Forma school" 
              className="rounded-lg shadow-md w-full h-auto max-w-[800px] md:max-w-[600px] sm:max-w-[500px] object-cover"
            />
          </div>
          
          {/* Text Content Section */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4 text-gray-700">
              <p className="font-medium text-gray-900">Bienvenue sur notre site !</p>
              
              <p>
                Je suis Emmanuel, le cerveau derrière Forma School. J'ai créé cet organisme 
                de formation pour offrir des opportunités uniques aux professionnels du BTP. 
                Mon objectif est simple : offrir une formation de qualité adaptée aux besoins 
                spécifiques du secteur de la construction.
              </p>

              <p>
                Fort de plus de 10 ans d'expérience dans la formation professionnelle, 
                Emmanuel a lancé Forma School en 2024, avec l'ambition d'apporter des 
                solutions flexibles et pratiques aux professionnels du BTP. Il a su s'entourer 
                d'un réseau d'experts pour concevoir des formations innovantes qui répondent aux 
                exigences du marché du bâtiment.
              </p>

              <p>
                Chez Forma School, nous croyons que chaque professionnel du bâtiment mérite 
                une formation accessible, flexible et surtout axée sur des compétences pratiques. 
                C'est pourquoi nous avons conçu des parcours de formation adaptés aux horaires 
                des travailleurs du secteur, afin de leur permettre de se former tout en continuant 
                à exercer leur activité.
              </p>

              <p>
                Rejoignez-nous dès aujourd'hui pour découvrir nos formations et donner un nouvel élan 
                à votre carrière dans le secteur du BTP !
              </p>

              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-primary">Emmanuel Zenou</p>
                <p className="text-gray-600">Fondateur de Forma school</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;
