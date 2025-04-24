import React from "react";
import TrainingList from "./TrainingList";
 
const AllTrainings = ({btpTrainings}) => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="">

        <p className="font-normal md:text-base text-sm text-center text-gray-500">
          Accédez à des formations certifiantes et financées par
          les dispositifs incontournables, dont le DPC.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full">
         <TrainingList btpTrainings={btpTrainings} />
      </div>
    </div>
  );
};

export default AllTrainings;
