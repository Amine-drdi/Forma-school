import React from "react";
import ContactUsForm from "./components/ContactUsForm";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import contactImage from '../../assets/images/contact-us.jpg'

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50">
      {/* Hero Section avec image de fond et overlay */}
      <div className="w-full relative h-96">
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Nous contacter</h1>
        </div>
        <img
          src={contactImage}
          alt="Contactez-nous"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Section Contact principale */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Hero />
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
            <ContactUsForm />
          </div>
        </div>
      </div>

      {/* Section FAQ centrée */}
      <div className="w-full bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Réduction de la largeur max pour mieux centrer le contenu */}
          <div className="text-center"> {/* Ajout d'un conteneur centré */}

            <div className="flex justify-center"> {/* Centrage du composant FAQ */}
              <Faq />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;