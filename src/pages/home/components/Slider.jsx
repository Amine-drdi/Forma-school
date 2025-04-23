import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Animation horizontale (de gauche à droite)
const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-tr from-orange-50 via-white to-white overflow-hidden">
      
      {/* Texte à gauche avec animation */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 text-left space-y-6">
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight"
        >
          🎓 Rejoignez notre communauté de professionnels du BTP !
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg lg:text-xl text-orange-500 font-semibold leading-relaxed"
          >
          Formez-vous pour bâtir l'avenir en toute sécurité !
        </motion.p>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-base lg:text-lg text-gray-700 leading-relaxed"
        >
          Accédez à des formations certifiées en BTP : CACES® R482, R486, R489, échafaudages,
          habilitations électriques B0 à H2, FEEBAT RENOVE, sécurité et SST.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <NavLink
            to="/formations/categorie/btp"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition duration-300 w-fit inline-block"
          >
            Découvrir les formations
          </NavLink>
        </motion.div>
      </div>

      {/* Image à droite */}
      <div className="w-full md:w-1/2 h-full relative">
        <img
          src="/images/construction-training.jpg"
          alt="formation btp"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      </div>
    </section>
  );
};

export default Hero;
