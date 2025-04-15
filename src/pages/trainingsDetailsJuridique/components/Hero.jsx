import React from "react";

const Hero = ({ setShowInscriptionForm }) => {
  return (
    <div className="relative flex h-full w-full py-12 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding md:bg-[#d6e0f5]/50 bg-[#d6e0f5]">
      <div className="flex flex-col gap-4 max-w-3xl">
        <p className="text-2xl font-bold">Formation Plaies et cicatrisation</p>
        <p className="text-sm">
        Le secteur du bâtiment présente de nombreux défis, tant sur le plan de la sécurité des chantiers que de la qualité des réalisations. Face à l’évolution rapide des techniques de construction, des normes environnementales et de la réglementation, les professionnels du BTP doivent continuellement renforcer leurs compétences. Maîtriser les bonnes pratiques, prévenir les risques, optimiser l’organisation et appliquer les protocoles de sécurité sont autant d’enjeux au quotidien. La formation BTP 2023 vous permettra d’adapter efficacement votre pratique sur le terrain, en consolidant vos connaissances techniques, votre compréhension des normes en vigueur, et votre capacité à gérer des situations complexes sur les chantiers.


        </p>
        <div className="flex flex-row items-center gap-4">
          <img
            src="https://lh3.googleusercontent.com/pw/AL9nZEUn0_Z__2yT_aZpFawJ_vi0ycdjOQQc-wtvTw2elNrVmzC4A8t5GrUaVe8qafjQJoK2xG2eqZCpaQY0fY_yx6IJBEtMJSHgDzxQvdQExK9I04HMw8B5hfjKC4tA0rxBcfg0fvv-zNiG7LLOaAQIhUY=w926-h617-no?authuser=0"
            alt="formateur"
            className="w-10 h-10 object-cover rounded-full"
          />
          <p>
            Formateur : <span className="underline">Jim Sullivan</span>
          </p>
        </div>
        <div className="flex items-center justify-center w-fit bg-main_color text-white hover:bg-secondary hover:text-primary border border-transparent hover:border-primary transition-all duration-500 ease-in-out">
          <button
            className="px-10 py-5 text-base font-semibold"
            onClick={() => setShowInscriptionForm(true)}
          >
            S'inscrire
          </button>
        </div>
        <p className="text-gray-700 text-sm">
          <span className="text-black/80 font-bold text-base">15</span> sont
          déjà inscrits
        </p>
      </div>
      <div className="w-1/2 h-full absolute right-0 bottom-0 top-0 -z-10">
        <img
          src="https://fac.img.pmdstatic.net/fit/~1~fac~2022~02~09~ba7ece74-7b5f-4b21-bf2e-e6f39ddf5f35.jpeg/1200x900/quality/80/crop-from/center/perfusion-definition-utilite-et-les-differents-types-de-perfusion.jpeg"
          alt="Hero Formation Plaies et Cicatrisation"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
