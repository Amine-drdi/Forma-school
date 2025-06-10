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
            Sabrina, la force motrice de notre équipe
          </h1>

        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img 
              src="../../../../public/images/dirigeant.jpg" 
              alt="Sabrina Elkrief - Dirigeant de Forma school" 
              className="rounded-lg shadow-md w-full h-auto max-w-[800px] md:max-w-[600px] sm:max-w-[500px] object-cover"
            />
          </div>
          
          {/* Text Content Section */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4 text-gray-700">
              
             <p>
  Je suis Sabrina, dirigeante de Forma School, un organisme de formation dédié aux professionnels du BTP.
</p>

<p>
Forte de plus de 10 ans d’expérience dans le domaine de la formation professionnelle, j’ai rejoint ce projet en 2024 avec une ambition claire : proposer des solutions concrètes, souples et adaptées aux réalités du secteur de la construction.</p>

<p>
Entourée d’un réseau d’experts, je veille au développement de programmes innovants, conçus pour répondre aux exigences du terrain et accompagner les évolutions du marché. Ma mission est de garantir la qualité et la pertinence des formations proposées, afin de permettre à chaque professionnel du BTP de se former efficacement et de faire évoluer sa carrière.</p>




              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-primary">Sabrina Elkrief</p>
                <p className="text-gray-600">Dirigeante de Forma school</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;
