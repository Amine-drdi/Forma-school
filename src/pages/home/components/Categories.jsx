import React from "react";
import CategoriesCard from "./CategoriesCard";
import {
   btpCategories,
 } from "../../../assets/data/categories";

const Categories = () => {
  return (
    <div className="py-16 bg-secondary  flex flex-col gap-10 items-center xl:px-desktop_padding lg:px-laptop_padding sm:px-tablet_padding px-mobile_padding">
      <div className="flex flex-row gap-4 items-end lg:mb-6 mb-4">
        <h1 className="font-bold md:text-3xl text-lg text-left ">
        Nos formations BTP
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
  
        <CategoriesCard
   
          categories={btpCategories}
          route="categorie/btp"
        />
    
      </div>
    </div>
  );
};

export default Categories;
