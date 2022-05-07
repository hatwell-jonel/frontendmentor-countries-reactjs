import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Filter from "../Filter";
import loadingGif from "../../image/loading.gif";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const formatNumber = (num) => {
    let digits = Number(num);
    let value = digits.toLocaleString("en");
    return value;
  };

  useEffect(() => {
    const getCountries = () => {
      const API_COUNTRIES = "https://restcountries.com/v2/all";
      fetch(API_COUNTRIES)
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
          setIsloading(!isLoading);
        });
    };
    getCountries();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loading">
          <img src={loadingGif} alt="" />
        </div>
      ) : (
        <>
          <Filter countries={countries} />
          <div className="countries">
            <div className="container-xl">
              {countries.map((country) => {
                const { flags, name, population, region, capital } = country;
                return (
                  <Link to={`/${name}`} key={name}>
                    <div className="country">
                      <div className="country__flag">
                        <img
                          src={flags.svg}
                          alt={name.common}
                          className="img-fluid"
                        />
                      </div>
                      <div className="country__details">
                        <p className="country__details-name">{name}</p>
                        <p className="country__details-population">
                          <span>population:</span> {formatNumber(population)}
                        </p>
                        <p className="country__details-region">
                          <span>region:</span> {region}
                        </p>
                        <p className="country__details-capital">
                          <span>capital :</span>
                          {capital}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Countries;
