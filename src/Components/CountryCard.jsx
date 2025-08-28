import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countrydata } from "../Apis/API.jsx";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const CountryCard = () => {
  const { id } = useParams();
  const [CountryDetail, setCountryDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await countrydata(id);
      setCountryDetail(response.data[0]);
    };
    fetchData();
  }, [id]); // added id as dependency

  console.log(CountryDetail);
  return (
    CountryDetail && (
      <div className="h-[80vh] w-[100%] flex justify-center items-center flex-col lg:flex-row mt-6 mx-auto relative">
        <div className="p-5">
          <img
            src={CountryDetail?.flags?.png}
            alt={CountryDetail?.flags?.alt}
          />
        </div>
        <div className="text-left p-5">
          {console.log(CountryDetail)}
          <h3 className="text-2xl uppercase font-medium text-neutral-600">
            {CountryDetail?.name?.common}
          </h3>
          <p>Population : {CountryDetail?.population}</p>
          <p>Region : {CountryDetail?.region}</p>
          <p>
            Currency:{" "}
            {Object.keys(CountryDetail?.currencies || {})
              .map((code) => {
                const currency = CountryDetail.currencies[code];
                return `${currency?.name} (${currency?.symbol})`;
              })
              .join(", ")}
          </p>
          <p>Continent : {CountryDetail?.continents?.join(", ")}</p>
          <p>
            Languages:{" "}
            {CountryDetail?.languages &&
              Object.values(CountryDetail.languages).join(", ")}
          </p>
          <p>start Of Week : {CountryDetail.startOfWeek}</p>
              <p>Capital : {CountryDetail.capital.join(',')}</p>
              <p>Sub Region : {CountryDetail.subregion}</p>
          <a
            href={CountryDetail?.maps?.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-3">
              Check In Maps{" "}
            </button>
          </a>
        </div>
     <NavLink to='/country'><button className="p-3 rounded-lg bg-neutral-700 absolute bottom-5 lg:bottom-10 right-10"><BsArrowLeft /></button></NavLink>   
      </div>
    )
  );
};

export default CountryCard;
