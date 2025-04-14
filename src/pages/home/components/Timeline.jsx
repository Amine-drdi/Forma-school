import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleNumber6Filled,
} from "react-icons/tb";

const steps = [
  {
    icon: TbCircleNumber1Filled,
    title: "Prenez contact avec un expert",
    description:
      "Nos conseillers vous guident dès le départ pour définir votre projet et débloquer les aides disponibles.",
  },
  {
    icon: TbCircleNumber2Filled,
    title: "Accédez à votre espace personnel",
    description:
      "Un lien d'accès sécurisé vous permet de suivre votre formation et vos documents à tout moment.",
  },
  {
    icon: TbCircleNumber3Filled,
    title: "Avancez à votre rythme",
    description:
      "Plateforme 100% flexible, accessible 24/7 sur tous vos appareils. Vous êtes libre d’apprendre à votre façon.",
  },
  {
    icon: TbCircleNumber4Filled,
    title: "Participez à la communauté",
    description:
      "Discutez avec d’autres apprenants, posez vos questions, échangez avec les formateurs.",
  },
  {
    icon: TbCircleNumber5Filled,
    title: "Recevez votre attestation",
    description:
      "Une fois la formation validée, nous vous remettons une attestation officielle reconnue.",
  },
  {
    icon: TbCircleNumber6Filled,
    title: "Touchez vos indemnités",
    description:
      "L’ANDPC effectue le virement de vos indemnités directement sur votre compte.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Comment démarrer avec nous ?
        </h2>
        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
          De l’inscription au financement, chaque étape est pensée pour vous simplifier la vie.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Ligne verticale */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-transparent via-[#c86104] to-transparent z-0" />

        <div className="flex flex-col gap-12 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-start md:items-center gap-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Badge numéro */}
              <div className="z-10 w-14 h-14 flex items-center justify-center rounded-full bg-[#fdeee3] text-[#c86104] shadow-md">
                <step.icon className="w-7 h-7" />
              </div>

              {/* Carte d'étape */}
              <div
                className="w-full md:w-1/2 bg-white border border-orange-100 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
