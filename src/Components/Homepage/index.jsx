import React, { useState, useEffect } from "react";
import Header from "../Header";
import Filter from "../Filter";
import Countries from "../Countries";
import loadingGif from "../../image/loading.gif";
import FilterByRegion from "../FilterByRegion";

function Homepage() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getCountries = () => {
    const API_COUNTRIES = "https://restcountries.com/v2/all";
    fetch(API_COUNTRIES)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setIsloading(!isLoading);
      });
  };
  useEffect(() => {
    getCountries();
  }, []);

  const [regionFilter, setRegionFilter] = useState("");

  const handleSelect = (e) => {
    setRegionFilter(e.target.value);
  };

  console.log(regionFilter);
  return (
    <div>
      <Header />

      {isLoading ? (
        <div className="loading">
          <img src={loadingGif} alt="" />
        </div>
      ) : (
        <>
          <Filter countries={countries} handleSelect={handleSelect} />
          {regionFilter == "All" || regionFilter == "" ? (
            <Countries countries={countries} />
          ) : (
            <FilterByRegion countries={countries} regionname={regionFilter} />
          )}
        </>
      )}
    </div>
  );
}

export default Homepage;
