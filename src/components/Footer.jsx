import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0f172a] text-gray-200 px-6 pt-10 pb-6">
      <div className="max-w-7xl mx-auto">

        {/* Bloc Forma School + Qualiopi */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="flex gap-4">
            <img src="/images/logoFormaSchool.png" alt="Logo Forma School" className="w-24 h-16 bg-white p-1 rounded shadow" />
            <p className="text-sm text-gray-300">
              Forma school est un organisme de formation dédié à la montée en compétences des professionnels et des entreprises.<br />
              En combinant expertise et pédagogie innovante, nous proposons des formations adaptées aux exigences actuelles du marché et aux besoins spécifiques de chaque apprenant.
            </p>
          </div>

          <div className="flex gap-4">
            <img src="/images/logo-qualiopi.jpeg" alt="Logo Qualiopi" className="w-24 h-16 bg-white p-1 rounded shadow" />
            <p className="text-sm text-gray-300">
              Notre organisme est certifié Qualiopi pour les actions de formation (L.6313-1 - 1°).<br />
              Cette certification atteste de la qualité des processus que nous mettons en œuvre pour accompagner nos clients, conformément au référentiel national de certification qualité.
            </p>
          </div>
        </div>

        {/* Grilles navigation + contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 text-sm">
          {/* Découvrir Forma school */}
          <div>
            <p className="text-white font-semibold mb-3">Découvrir Forma school</p>
            <ul className="space-y-2">
              <li><NavLink to="/formations/categorie/sante" className="hover:text-orange-400">Santé</NavLink></li>
              <li><NavLink to="/formations/categorie/btp" className="hover:text-orange-400">Bâtiment</NavLink></li>
              <li><NavLink to="/formations/juridique/juridique-et-administrative" className="hover:text-orange-400">Juridique et Administrative</NavLink></li>
              <li><NavLink to="/a-propos" className="hover:text-orange-400">Qui sommes-nous</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-orange-400">Contactez-nous</NavLink></li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <p className="text-white font-semibold mb-3">Informations légales</p>
            <ul className="space-y-2">
              <li><NavLink to="/politiques-de-confidentialite" className="hover:text-orange-400">Politique de confidentialité</NavLink></li>
              <li><NavLink to="/conditions-generales" className="hover:text-orange-400">Conditions générales</NavLink></li>
              <li><NavLink to="/mentions-legales" className="hover:text-orange-400">Mentions légales</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-3">Contact</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><GoHome className="text-orange-400 mt-1" /> <span>229 RUE SAINT-HONORE, 75001 PARIS</span></li>
              <li className="flex items-center gap-2"><MdOutlinePhone className="text-orange-400" /> 07 56 82 86 00</li>
              <li className="flex items-center gap-2"><MdOutlineMail className="text-orange-400" /> contact@forma-school.fr</li>
              <li className="text-orange-400 font-semibold mt-2">SIRET : 932 315 914 00014</li>
            </ul>
          </div>

          {/* Carte */}
          <div>
            <p className="text-white font-semibold mb-3">Localisation</p>
            <iframe
              title="Google Maps Location"
              className="w-full h-32 rounded-md shadow-md"
              frameBorder="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5915744864317!2d2.331891076573113!3d48.86605170033998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e35bb69eb65%3A0x15e8ab32bb8b1b57!2s229%20Rue%20Saint-Honor%C3%A9%2C%2075001%20Paris%2C%20France!5e0!3m2!1sen!2sfr!4v1708445158767!5m2!1sen!2sfr"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 mt-6 border-t border-gray-700 text-xs">
          <p className="text-gray-400 mb-2 sm:mb-0 text-center w-full sm:w-auto">
            &copy; {currentDate} Forma school. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-orange-400">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-orange-400">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-orange-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
