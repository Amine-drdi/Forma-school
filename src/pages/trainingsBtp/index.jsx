import React, { useEffect, useState } from "react";
import AllTrainings from "./components/AllTrainings";
import { useLocation } from "react-router-dom";
import { btpTrainings } from "../../assets/data/trainings";

const HealthAndConstructionTrainings = () => {
  const location = useLocation();
  const [trainingsList, setTrainingsList] = useState([]);

  useEffect(() => {
    const trainingMapping = {
      "/formations/categorie/btp": btpTrainings,
    };

    setTrainingsList(trainingMapping[location.pathname] || []);
  }, [location]);

  const pageDetails = {
    "/formations/categorie/btp": {
      title: "Nos programmes de formation pour les professionnels du bâtiment",
      description:
        "Adaptées aux besoins du secteur du bâtiment, elles visent à renforcer vos compétences tout en répondant aux exigences des évolutions professionnelles et technologiques.",
    },
  };

  const { title, description } = pageDetails[location.pathname] || {
    title: "Formations disponibles",
    description:
      "Découvrez nos programmes variés qui s'adaptent à différents secteurs professionnels.",
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#f9d9b0] to-[#f7a33e] py-16 flex flex-col gap-14 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-xl max-w-5xl mx-auto">
        <p className="font-bold text-3xl text-[#c86104] text-left">{title}</p>
        <p className="text-gray-700 text-base md:text-lg text-left">{description}</p>
      </div>

      <div className="mt-10">
        <AllTrainings btpTrainings={trainingsList} />
      </div>
    </div>
  );
};

export default HealthAndConstructionTrainings;
