import React from "react";
 import MostSeenTrainingsBtp from "./components/MostSeenTrainingsBtp";
 import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import Advisors from "./components/Advisors";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./components/Timeline";
import { btpAdvisors } from "../../assets/data/advisors";
import {btpTrainings } from "../../assets/data/trainings";
import Slider from "./components/Slider";
 

AOS.init({ duration: 1000 });
AOS.refresh();

const Home = () => {
  return (
    <section className="flex flex-col">
      <Slider />
      <MostSeenTrainingsBtp
        title="Nos formations essentielles pour les professionnels du bâtiment !"
        description="Explorez notre sélection de formations clés pour développer vos compétences techniques et mener à bien vos projets dans le secteur de la construction."
        trainings={btpTrainings}
      />
       <WhyChooseUs />
       <Timeline />

     
      <Advisors
        label="Bénéficiez de l’expertise de professionnels chevronnés"
        description="Acteurs majeurs des grandes réalisations du secteur, ils partagent leur vision pour inspirer et accompagner ceux qui façonnent le monde de demain"
        advisorsList={btpAdvisors}
      />
 
      <Testimonial />
      
    </section>
  );
};

export default Home;
