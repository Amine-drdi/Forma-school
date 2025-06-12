import React from "react";
import Card from "../../../components/CardBtp";

const TrainingList = ({ btpTrainings }) => {
  return (
    <div className="grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      xl:grid-cols-5 
      2xl:grid-cols-5 
      gap-4 
      px-4 
      sm:px-6 
      md:px-8 
      lg:px-10 
      xl:px-20 
      2xl:px-40"
    >
      {btpTrainings.map((training) => (
        <Card
          key={training.id}
          imageUrl={training.image}
          title={training.title}
          instructors={training.instructors}
          duration={training.duration}
          id={training.id}
        />
      ))}
    </div>
  );
};

export default TrainingList;
