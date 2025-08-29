import React, { useEffect, useState } from "react";
import getData from "../Apis/API";
import { NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import Loader from '../UI/Loader.jsx'
const Country = () => {
  const [Countries, setCountries] = useState(null);
  const [Search, setSearch] = useState('') 
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setCountries(response.data);
    };
    fetchData();
  }, []);

  console.log(Countries);


    const AZHandler =()=>{
      const sortedData = [...Countries].sort((a,b)=>a.name.common.localeCompare(b.name.common));
      setCountries(sortedData)
    }

    const ZAHandler =()=>{
     const sortedData = [...Countries].sort((a,b)=>b.name.common.localeCompare(a.name.common));
      setCountries(sortedData)
    }

    const SearchHandle = (e)=>{
        setSearch(e.target.value);
        console.log(Search)
    }


    const FilteredCounrty = Countries && Countries.filter((country)=>country.name.common.toLowerCase().includes(Search.toLowerCase()))


  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loader />;



  return (
    <>
      <div className="w-[100%] p-5 border-1 border-neutral-600">
        <div className="container flex justify-between flex-col gap-3 lg:flex-row lg:gap-0">
          <button className="flex items-center gap-3 border-2 border-neutral-600 p-2 rounded-lg cursor-pointer" onClick={AZHandler}>A-Z <GoArrowUp /></button>
          <button className="flex items-center gap-3 border-2 border-neutral-600 p-2 rounded-lg cursor-pointer" onClick={ZAHandler}>Z-A <GoArrowDown /></button>
          <input type="text" className="  w-[100%] lg:w-70 border-2 border-neutral-600  rounded-lg p-2" onChange={SearchHandle} value={Search} placeholder="Search Country"/>
        </div>
        
      </div>

      <div className="flex flex-wrap justify-center container">
        {Countries &&
          FilteredCounrty.map((Element, key) => {
            return (
              <div
                key={key}
                className="w-65 bg-gradient-to-r from-neutral-800 to-transparent text-white p-5 rounded-lg m-4"
              >
                <img
                  src={Element.flags.png}
                  alt=""
                  className="w-[100%] h-35 object-cover mb-2"
                />
                <h3 className="text-xl text-neutral-300">
                  {Element.name.common}
                </h3>
                <p>Population : {Element.population}</p>
                <p>
                  Language :{" "}
                  {Object.keys(Element.languages).map(
                    (ele) => Element.languages[ele] + " "
                  )}
                </p>
                <NavLink to={`/detail/${Element.name.common}`}>
                  {" "}
                  <button className="cursor-pointer px-5 py-2 mt-2 bg-neutral-800 rounded-lg border-1 border-neutral-600">
                    Know More
                  </button>
                </NavLink>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Country;
