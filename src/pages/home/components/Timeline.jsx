import React from "react";
import {
  TbMessage2Share,
  TbUserShield,
  TbDeviceMobileMessage,
  TbUsersGroup,
  TbCertificate,
  TbCashBanknote,
} from "react-icons/tb";

const steps = [
  {
    icon: <TbMessage2Share className="text-orange-600 w-10 h-10" />,
    title: "Conseil personnalisé",
    description: "Un expert vous oriente selon vos besoins et les financements éligibles.",
  },
  {
    icon: <TbUserShield className="text-orange-600 w-10 h-10" />,
    title: "Connexion sécurisée",
    description: "Vous accédez à votre espace en ligne pour gérer votre parcours simplement.",
  },
  {
    icon: <TbDeviceMobileMessage className="text-orange-600 w-10 h-10" />,
    title: "Flexibilité totale",
    description: "Suivez votre formation 24h/24 depuis votre téléphone, tablette ou ordinateur.",
  },
  {
    icon: <TbUsersGroup className="text-orange-600 w-10 h-10" />,
    title: "Communauté active",
    description: "Posez vos questions, échangez avec les formateurs et autres apprenants.",
  },
  {
    icon: <TbCertificate className="text-orange-600 w-10 h-10" />,
    title: "Attestation délivrée",
    description: "Une fois la formation complétée, vous recevez une attestation officielle.",
  },
  {
    icon: <TbCashBanknote className="text-orange-600 w-10 h-10" />,
    title: "Indemnisation rapide",
    description: "L’ANDPC vous reverse les indemnités directement sur votre compte.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Un parcours simple, fluide et pensé pour vous
        </h2>
        <p className="text-gray-600 text-lg">
          Chaque étape est conçue pour vous accompagner, de l'inscription à l'obtention de vos indemnités.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group bg-orange-50 border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-orange-100 rounded-full p-3">
                {step.icon}
              </div>
              <span className="text-sm text-orange-600 font-semibold">Étape {index + 1}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
