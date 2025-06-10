import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Informations de contact</h2>
        <p className="text-gray-600">
          Notre équipe est à votre disposition pour répondre à toutes vos questions.
          N'hésitez pas à nous contacter par téléphone, email ou directement via le formulaire.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
            <HiPhone className="w-6 h-6 text-primary" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800">Téléphone</h3>
            <p className="text-gray-600">07 56 82 86 00</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
            <HiMail className="w-6 h-6 text-primary" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800">Email</h3>
            <p className="text-gray-600">contact@Formaschool.fr</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
            <HiLocationMarker className="w-6 h-6 text-primary" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-800">Adresse</h3>
            <p className="text-gray-600">	IMMEUBLE D, 128 RUE LA BOETIE, 75008 PARIS</p>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Heures d'ouverture</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="flex justify-between">
            <span>Lundi - Vendredi</span>
            <span>9h00 - 18h00</span>
          </li>
          <li className="flex justify-between">
            <span>Samedi</span>
            <span>10h00 - 13h00</span>
          </li>
          <li className="flex justify-between">
            <span>Dimanche</span>
            <span>Fermé</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;