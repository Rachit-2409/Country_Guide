import React, { useEffect, useState } from "react";
import getData from "../Apis/API";
import { NavLink } from "react-router-dom";
import { useNavigation } from "react-router-dom";
const Country = () => {
  const [Countries, setCountries] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();
      setCountries(response.data);
    };
    fetchData();
  }, []);

  console.log(Countries);

  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loader />;

  return (
    <>
      <div className="w-[100%] p-5 border-1 border-neutral-600">
        <button>Asceding</button>
      </div>

      <div className="flex flex-wrap justify-center">
        {Countries &&
          Countries.map((Element, key) => {
            return (
              <div
                key={key}
                className="w-70 bg-gradient-to-r from-neutral-800 to-transparent text-white p-5 rounded-lg m-4"
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
