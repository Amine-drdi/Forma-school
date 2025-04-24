import React from "react";
import { FaGraduationCap, FaGlobe, FaUserCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  {
    icon: <FaGraduationCap className="text-white text-xl" />,
    title: "Qualité pédagogique",
    description: "Des parcours certifiants, conçus par des experts du bâtiment.",
    color: "bg-primary",
  },
  {
    icon: <FaGlobe className="text-white text-xl" />,
    title: "Accessibilité totale",
    description: "Une plateforme disponible 24h/24, partout en France.",
    color: "bg-primary",
  },
  {
    icon: <FaUserCheck className="text-white text-xl" />,
    title: "Accompagnement humain",
    description: "Des formateurs disponibles pour vous guider à chaque étape.",
    color: "bg-primary",
  },
];

export default function OurMission() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-16">
      <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center gap-16">
        
        {/* Texte & Timeline */}
        <div className="w-full space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-3xl text-xl font-bold text-primary text-center"
          >
            Notre mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-base sm:text-lg md:text-xl text-center leading-relaxed"
          >
            Nous construisons un avenir plus formé pour les professionnels<br className="hidden md:block" />
            du bâtiment à travers une pédagogie novatrice, accessible, et<br className="hidden md:block" />
            profondément humaine.
          </motion.p>

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="relative pl-14"
              >
                <div className={`absolute left-0 top-1 w-10 h-10 flex items-center justify-center rounded-full shadow-md ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
