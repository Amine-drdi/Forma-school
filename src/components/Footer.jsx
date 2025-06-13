import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdOutlineMail, MdOutlinePhone, MdOutlineBusiness } from "react-icons/md";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 px-4 sm:px-6 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* About Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                src="/images/logoFormaSchool.png" 
                alt="Logo Forma School" 
                className="w-24 h-16 object-contain" 
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Forma School</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Organisme de formation dédié à la montée en compétences des professionnels et des entreprises.
                Nous combinons expertise et pédagogie innovante pour des formations adaptées aux exigences du marché.
              </p>
            </div>
          </div>

          {/* Certification Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 bg-white p-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                src="/images/logo-qualiopi.jpeg" 
                alt="Logo Qualiopi" 
                className="w-24 h-16 object-contain" 
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Certification Qualiopi</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Certifié pour les actions de formation (L.6313-1 - 1°).
                Cette certification atteste de la qualité de nos processus conformément au référentiel national.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Discover Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-orange-500 pb-2 inline-block">
              Découvrir
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/formations/categorie/btp" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Bâtiment
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/a-propos" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Qui sommes-nous
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Contactez-nous
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-orange-500 pb-2 inline-block">
              Informations légales
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  to="/politiques-de-confidentialite" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Politique de confidentialité
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/mentions-legales" 
                  className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-orange-500 pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <GoHome className="text-orange-400 mt-1 flex-shrink-0" />
                <span>IMMEUBLE D, 128 RUE LA BOETIE, 75008 PARIS</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                <MdOutlinePhone className="text-orange-400" />
                07 56 82 86 00
              </li>
              <li className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-300">
                <MdOutlineMail className="text-orange-400" />
                contact@forma-school.fr
              </li>
              <li className="flex items-center gap-3 mt-4">
                <MdOutlineBusiness className="text-orange-400" />
                <span className="text-gray-300">
                  <span className="font-semibold text-orange-400">SIRET :</span> 932 315 914 00014
                </span>
              </li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-orange-500 pb-2 inline-block">
              Localisation
            </h3>
            <div className="overflow-hidden rounded-lg shadow-lg border border-gray-700 hover:border-orange-400 transition-all duration-300">
              <iframe
                title="Google Maps Location"
                className="w-full h-48"
                frameBorder="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2206.7895908622468!2d2.3031646637339835!3d48.87098756231883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc3f24fffff%3A0x18fd90f3c3e69e0c!2s128%20Rue%20La%20Bo%C3%A9tie%20imm%20d%2C%2075008%20Paris%2C%20France!5e0!3m2!1sfr!2stn!4v1749567055788"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-4 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            &copy; 2024 Forma school. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-lg"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://www.instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-lg"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-lg"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;