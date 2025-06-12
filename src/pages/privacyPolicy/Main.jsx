import React, { useState } from "react";

const Main = () => {
  const [activeSections, setActiveSections] = useState({
    accordion: true,
    introduction: true,
    cookies: true,
    data: true,
    purposes: true,
    sharing: true,
    modifications: true,
    rights: true
  });

  const toggleSection = (section) => {
    setActiveSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    {
      id: "accordion",
      title: "Accord de confidentialité",
      content: (
        <>
          <p className="mb-4">
            Cette politique de confidentialité décrit les informations que Forma school collecte auprès des utilisateurs finaux de notre site web Forma school et les informations que nous collectons pour le compte de nos clients qui utilisent notre technologie pour utiliser nos services.
          </p>
          <p className="mb-4">
            Cette politique ne s'applique pas aux tiers que Forma school ne possède pas ou ne contrôle pas. Ces tiers ne sont pas sous le contrôle de Forma school et Forma school n'est pas responsable de leurs pratiques en matière de confidentialité ou de sécurité.
          </p>
          <p>
            Tout formulaire de commande ou accord supplémentaire auquel les utilisateurs acceptent de se soumettre pour l'utilisation des fonctionnalités optionnelles de Forma school prévaudra sur les termes de cette politique de confidentialité en cas de divergence, veuillez donc lire attentivement ces formulaires de commande ou accords supplémentaires.
          </p>
        </>
      )
    },
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <p>
          Dans le cadre de son activité, Forma school collecte et traite certaines données personnelles de ses utilisateurs. Cette Politique de Confidentialité vise à informer sur les données collectées, leur utilisation et les droits des utilisateurs.
        </p>
      )
    },
    {
      id: "cookies",
      title: "Cookies et publicité basée sur les centres d'intérêt",
      content: (
        <>
          <p className="mb-4">
            Les cookies sont des identifiants alphanumériques transférés sur le disque dur de votre ordinateur via votre navigateur Web pour permettre à nos systèmes de reconnaître votre navigateur et de nous dire comment et quand les pages de notre Site sont visitées et par combien de personnes. Comme la plupart des sites Internet, nous utilisons des cookies pour améliorer l'expérience de nos utilisateurs sur Internet. Ces cookies ne collectent pas d'informations personnelles, et nous ne combinons pas les informations collectées via les cookies avec d'autres informations personnelles pour savoir qui vous êtes ou quel est votre nom ou votre adresse e-mail.
          </p>
          <p>
            La plupart des navigateurs vous permettent d'empêcher le navigateur d'accepter de nouveaux cookies, d'être averti lorsque vous recevez un nouveau cookie ou de désactiver les cookies. Si vous supprimez vos cookies ou si vous configurez votre navigateur pour refuser les cookies, certaines fonctionnalités du Site peuvent ne pas fonctionner ou ne pas fonctionner comme prévu. Notez que si vous choisissez de supprimer les cookies, vous pouvez supprimer les cookies de désactivation qui affectent vos préférences publicitaires.
          </p>
        </>
      )
    },
    {
      id: "data",
      title: "Données collectées",
      content: (
        <>
          <p className="mb-4">
            Cette section décrit nos politiques concernant le traitement des informations des utilisateurs finaux fournies par nos clients utilisant nos Services ou d'autres sources de leur choix. Nous fournissons à nos clients la possibilité de créer des profils de leurs utilisateurs finaux afin de communiquer efficacement avec eux via des outils de communication marketing comme l'e-mail, les services d'analyse. Pour ce faire, nos clients intègrent notre technologie dans leurs applications, sites Web ou autres services en ligne.
          </p>
          <p className="mb-4">
            La collecte, l'utilisation et la divulgation des données par nos clients sont régies séparément par leurs politiques de confidentialité. Nos clients peuvent collecter des informations sur leurs utilisateurs directement ; dans ce cas, chacun de nos clients est responsable de s'assurer que leur collecte de données respecte leurs politiques de confidentialité et conditions d'utilisation.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold mb-2">Informations d'identification :</p>
            <p className="mb-3">Nom, prénom, adresse e-mail, numéro de téléphone</p>
            
            <p className="font-semibold mb-2">Données de paiement :</p>
            <p className="mb-3">Informations bancaires (via un prestataire sécurisé)</p>
            
            <p className="font-semibold mb-2">Données de navigation :</p>
            <p>Cookies, adresse IP, historique de connexion</p>
          </div>
        </>
      )
    },
    {
      id: "purposes",
      title: "Finalités du traitement",
      content: (
        <>
          <p className="mb-4">Les données sont utilisées pour :</p>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li>Gérer l'accès aux formations et aux comptes utilisateurs.</li>
            <li>Envoyer des informations commerciales et pédagogiques (avec consentement).</li>
            <li>Améliorer l'expérience utilisateur et la sécurité du site.</li>
          </ol>
        </>
      )
    },
    {
      id: "sharing",
      title: "Partage des données",
      content: (
        <p>
          Les données personnelles ne sont ni vendues ni cédées à des tiers. Toutefois, elles peuvent être partagées avec des prestataires techniques (hébergement, paiement en ligne).
        </p>
      )
    },
    {
      id: "modifications",
      title: "Modifications de la Politique de Confidentialité",
      content: (
        <p>
          Cette politique peut être mise à jour à tout moment. Nous informerons les utilisateurs en cas de modification importante.
        </p>
      )
    },
    {
      id: "rights",
      title: "Exercice des droits",
      content: (
        <>
          <p className="mb-4">
            Pour exercer vos droits, vous pouvez nous contacter à :
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p>
              <span className="font-semibold">Adresse:</span> 
              <span className="ml-2">IMMEUBLE D, 128 RUE LA BOETIE, 75008 PARIS</span>
            </p>
            <p >
              <span className="font-semibold">Email:</span> 
              <a href="mailto:contact@formaschool.fr" className="text-primary ml-2 hover:underline">
                contact@formaschool.fr
              </a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Téléphone:</span> 
              <span className="ml-2">07 56 82 86 00</span>
            </p>
            
          </div>
          <p className="mt-4">
            Nous répondrons à votre demande sous 30 jours maximum.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-200 px-8 py-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Politique de confidentialité
        </h1>
        <p className="mt-2 text-gray-500">
          Dernière mise à jour : 16/03/2025
        </p>
      </div>

      {/* Content */}
      <div className="divide-y divide-gray-200">
        {sections.map((section, index) => (
          <div key={section.id} className="px-8 py-6">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleSection(section.id)}
              aria-expanded={activeSections[section.id]}
              aria-controls={`section-${section.id}`}
            >
              <h2 className="text-xl font-bold text-primary">
                {section.title}
              </h2>
              <svg
                className={`w-6 h-6 text-gray-500 transform transition-transform ${activeSections[section.id] ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`section-${section.id}`}
              className={`mt-4 text-gray-700 ${!activeSections[section.id] ? 'hidden' : ''}`}
            >
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;