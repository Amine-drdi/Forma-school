import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Accessibilité",
    text: "Formations en ligne et en présentiel accessibles partout en France.",
    icon: "🌍",
  },
  {
    title: "Qualité",
    text: "Contenus réalisés par des experts du BTP, conformes aux exigences du marché.",
    icon: "🏆",
  },
  {
    title: "Innovation",
    text: "Simulateurs, vidéos 3D et outils immersifs pour un apprentissage moderne.",
    icon: "💡",
  },
  {
    title: "Accompagnement",
    text: "Suivi personnalisé pour une montée en compétences garantie.",
    icon: "🤝",
  },
];

const OurApproach = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-24 px-6 sm:px-12 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-32 h-32 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-700 font-semibold">Notre méthodologie</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-3">
            Une approche <span className="text-orange-700">unique</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Nous combinons expertise technique et pédagogie innovante pour des formations exceptionnelles.
          </p>
        </motion.div>

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
              
            </motion.div>
          ))}
        </div>

        {/* Bouton CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <NavLink to="/formations/categorie/btp" className="px-8 py-3 bg-gradient-to-r from-amber-700 to-orange-500 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            Découvrir nos formations
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;