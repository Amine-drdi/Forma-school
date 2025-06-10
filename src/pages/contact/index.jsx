import React from "react";
import ContactUsForm from "./components/ContactUsForm";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import contactImage from '../../assets/images/contact-us.jpg'

const Contact = () => {
  return (
    <div className="flex flex-col items-center bg-gray-50">
      {/* Hero Section avec image de fond et overlay */}
      <div className="w-full relative h-96 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2206.7895908622468!2d2.3031646637339835!3d48.87098756231883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc3f24fffff%3A0x18fd90f3c3e69e0c!2s128%20Rue%20La%20Bo%C3%A9tie%20imm%20d%2C%2075008%20Paris%2C%20France!5e0!3m2!1sfr!2stn!4v1749567055788!5m2!1sfr!2stn"
         width="100%" height="100%" style={{ border: 0 }} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation de Forma School"></iframe>
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