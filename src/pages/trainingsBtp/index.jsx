import React, { useEffect, useState } from "react";
import AllTrainings from "./components/AllTrainings";
import { useLocation } from "react-router-dom";
import { btpTrainings } from "../../assets/data/trainings";

import { AnimatePresence, motion } from "framer-motion";


const formations = ["CACES R482", "CACES R486", "CACES R489", "Habilitations électrique" , "Utilisation d’Échafaudages" , "RGE FEEBAT RENOVE"];

const HealthAndConstructionTrainings = () => {
  const location = useLocation();
  const [trainingsList, setTrainingsList] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % formations.length);
    }, 4000); // toutes les 2.5 secondes

    return () => clearInterval(interval);
  }, []);



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
    <div>
        <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-b from-[#e08e3c] via-yellow-200 to-[#eebd8c] text-white text-center px-4 ">
      <h1 className="text-3xl md:text-5xl font-bold mb-10">
        Nos Formations pour les professionnels du BTP
      </h1>

      <div className="relative h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute text-2xl md:text-4xl font-semibold"
          >
            {formations[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>


      <div className="mt-10">
        <AllTrainings btpTrainings={trainingsList} />
      </div>
    </div>
  );
};

export default HealthAndConstructionTrainings;
