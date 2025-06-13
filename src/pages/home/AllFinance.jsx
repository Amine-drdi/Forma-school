import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./components/Timeline";
import FormationCard from "./components/CardFormation";
import cpf from "../../assets/images/cpf.png" ;
import opco from "../../assets/images/OPCO.png" ;
import Pole from "../../assets/images/PoleEmploi.png" ;
import fiphfp from "../../assets/images/fiphfp.jpg" ;
import agefiph from "../../assets/images/logo-agefiph.png"



const Home = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true // Les animations ne se jouent qu'une fois
    });
    AOS.refresh();
  }, []);

  return (
    <section className="flex flex-col px-4 sm:px-8 lg:px-20 py-8 bg-gray-50">
      {/* Titre section */}
      <div className="mb-12 text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Nos Solutions de Financement
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez les différentes solutions pour financer votre formation professionnelle
        </p>
      </div>

      {/* Grille des cartes */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <FormationCard
          image={cpf}
          link="/CPF"
          name="CPF"
          description="Le financement CPF (Compte Personnel de Formation) permet aux salariés et demandeurs d'emploi de financer des formations professionnelles à partir des droits acquis sur leur compte. Ces fonds sont gérés par la Caisse des Dépôts et peuvent être utilisés pour des formations certifiantes ou qualifiantes."
        />
        <FormationCard
          image={opco}
          link="/Opco"
          name="OPCO"
          description="Les OPCO (Opérateurs de Compétences) sont des organismes chargés d'accompagner les entreprises dans le financement de la formation professionnelle de leurs salariés. Ils soutiennent les TPE, PME et les secteurs spécifiques en assurant le financement et le conseil en matière de formation."
        />
        <FormationCard
          image={fiphfp}
          link="/fiphfp"
          name="FIPHFP"
          description="Le FIPHFP (Fonds pour l'Insertion des Personnes Handicapées dans la Fonction Publique) finance des actions permettant l'insertion, le maintien dans l'emploi et la formation des personnes handicapées dans la fonction publique. Il soutient les employeurs publics dans leurs démarches d'accessibilité et d'adaptation des postes de travail."
        />
        <FormationCard
          image={Pole}
          link="/poleEmploi"
          name="Pôle d'emploi"
          description="Pôle emploi accompagne les demandeurs d'emploi dans leur recherche d'emploi en proposant des services de conseil, de formation, et d'indemnisation. Il facilite l'accès à l'emploi en mettant en relation les candidats et les recruteurs tout en offrant des dispositifs de soutien à la reconversion professionnelle."
        />
        <FormationCard
          image={agefiph}
          link="/agefiph"
          name="Agefiph"
          description="L'AGEFIPH (Association de gestion du fonds pour l'insertion des personnes handicapées) finance des actions visant à favoriser l'insertion et le maintien dans l'emploi des personnes en situation de handicap. Elle soutient les entreprises et les travailleurs handicapés à travers des aides financières et des services d'accompagnement."
        />
      </div>

      {/* Timeline */}
      <div className="mt-16 px-4 sm:px-8 lg:px-16" data-aos="fade-up">
        <Timeline />
      </div>
    </section>
  );
};

export default Home;