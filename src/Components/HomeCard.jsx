import React from "react";
import Country from "../JSON/Country.json";
const HomeCard = () => {
  return (
    <>
      {Country.map((CurrentCard, index) => {
        return (
          <div key={index} className="w-70 bg-gradient-to-r from-neutral-800 to-transparent text-white p-5 rounded-lg" >
            <h3 className="text-2xl text-gray-50">{CurrentCard.name}</h3>
            <p>Population : {CurrentCard.population}</p>
            <p>Language : {CurrentCard.languages.join(', ')}</p>
            <p className="mb-3">Region : {CurrentCard.region}</p>
            <img src={CurrentCard.flag} alt="" className="w-full h-35 object-cover"/>
          </div>
        );
      })}
    </>
  );
};

export default HomeCard;
