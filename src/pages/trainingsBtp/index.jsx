import React, { useEffect, useState } from "react";
import AllTrainings from "./components/AllTrainings";
import { useLocation } from "react-router-dom";
import { btpTrainings } from "../../assets/data/trainings";
import { AnimatePresence, motion } from "framer-motion";

const formations = [
  "CACES R482", 
  "CACES R486", 
  "CACES R489", 
  "Habilitations électrique", 
  "Utilisation d'Échafaudages", 
  "RGE FEEBAT RENOVE"
];

const HealthAndConstructionTrainings = () => {
  const location = useLocation();
  const [trainingsList, setTrainingsList] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % formations.length);
    }, 3000);

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
      description: "Adaptées aux besoins du secteur du bâtiment, elles visent à renforcer vos compétences tout en répondant aux exigences des évolutions professionnelles et technologiques.",
    },
  };

  const { title, description } = pageDetails[location.pathname] || {
    title: "Formations disponibles",
    description: "Découvrez nos programmes variés qui s'adaptent à différents secteurs professionnels.",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-96 bg-gradient-to-br from-orange-400 to-orange-200 text-white text-center px-4 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Formations BTP <span className="text-yellow-200">Professionnelles</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="relative h-20 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, position: 'absolute' }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute text-2xl md:text-3xl font-semibold bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg"
              >
                {formations[index]}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            {title}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          
          <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
            <AllTrainings btpTrainings={trainingsList} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthAndConstructionTrainings;