import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Accessibilité",
    text: "Formations en ligne et en présentiel accessibles partout en France.",
  },
  {
    title: "Qualité",
    text: "Contenus réalisés par des experts du BTP, conformes aux exigences du marché.",
  },
  {
    title: "Innovation",
    text: "Simulateurs, vidéos 3D et outils immersifs pour un apprentissage moderne.",
  },
  {
    title: "Accompagnement",
    text: "Suivi personnalisé pour une montée en compétences garantie.",
  },
];

const OurApproach = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 sm:px-12 overflow-hidden">
      {/* Image de fond stylisée */}
      <img
        src="/images/approche2.jpg"
        alt="Notre approche"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black/10" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-14">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Notre approche
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
