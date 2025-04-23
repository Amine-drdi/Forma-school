import React from "react";
import img1 from "../../../../public/images/mission.jpg";
import { FaGraduationCap, FaGlobe, FaUserCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const items = [
  {
    icon: <FaGraduationCap className="text-white text-xl" />,
    title: "Qualité pédagogique",
    description: "Des parcours certifiants, conçus par des experts du bâtiment.",
    color: "bg-orange-500",
  },
  {
    icon: <FaGlobe className="text-white text-xl" />,
    title: "Accessibilité totale",
    description: "Une plateforme disponible 24h/24, partout en France.",
    color: "bg-orange-500",
  },
  {
    icon: <FaUserCheck className="text-white text-xl" />,
    title: "Accompagnement humain",
    description: "Des formateurs disponibles pour vous guider à chaque étape.",
    color: "bg-orange-500",
  },
];

export default function OurMission() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-52">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Timeline */}
        <div className="space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-orange-500"
          >
             Notre mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 text-lg"
          >
            Nous construisons un avenir plus formé pour les professionnels du bâtiment à travers une pédagogie novatrice, accessible, et profondément humaine.
          </motion.p>

          <div className="relative  pl-6 space-y-10 mt-10">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="relative"
              >
                <div className={`absolute -left-14 top-1.5 w-10 h-10 flex items-center justify-center rounded-full shadow-lg  ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full flex justify-center"
        >
          <img
            src={img1}
            alt="BTP"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
