import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { formatNumber } from "../function";
import Header from "../Header";

function Country() {
  const [countries, setCountries] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      const API_COUNTRIES = `https://restcountries.com/v2/name/${name}`;
      fetch(API_COUNTRIES)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    };
    getCountry();
  }, []);

  return (
    <>
      <Header />
      <div className="country">
        <div className="container-xl">
          <div className="btn_container">
            <Link to="/">
              <button className="btn_back">
                <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
              </button>
            </Link>
          </div>
          <div className="p-2">
            {countries.map((country) => {
              const {
                flags,
                name,
                nativeName,
                population,
                region,
                subregion,
                capital,
                topLevelDomain,
                currencies,
                languages,
                borders,
              } = country;
              return (
                <div key={name} id="country_details">
                  <div className="img-container">
                    <img
                      src={flags?.svg || flags?.png}
                      className="img-fluid"
                      alt={name}
                    />
                  </div>
                  <div className="details-container">
                    <ul className="details">
                      <li className="details-name">
                        <h2>{name ? name : "no name"}</h2>
                      </li>

                      <li className="details-items">
                        <ul className="details-items-top">
                          <li className="details-nativeName">
                            native name:{" "}
                            <span>
                              {nativeName ? nativeName : "no nativename"}
                            </span>
                          </li>
                          <li className="details-population">
                            population:{" "}
                            <span>
                              {population
                                ? formatNumber(population)
                                : "unknown"}
                            </span>
                          </li>
                          <li className="details-region">
                            region: <span>{region ? region : "no region"}</span>
                          </li>
                          <li className="details-subregion">
                            sub region:{" "}
                            <span>
                              {subregion ? subregion : "no subregion"}
                            </span>
                          </li>
                          <li className="details-capital">
                            capital:{" "}
                            <span>{capital ? capital : "no capital"}</span>
                          </li>
                        </ul>

                        <ul className="details-items-bottom">
                          <li className="details-domain">
                            top level domain:{" "}
                            <span>
                              {topLevelDomain ? topLevelDomain : "unknown"}
                            </span>
                          </li>
                          <li className="details-currencies">
                            currencies:{" "}
                            <span>
                              {currencies ? (
                                <>
                                  {currencies.map((item) => {
                                    const { symbol, name } = item;
                                    return `${symbol} ${name}`;
                                  })}
                                </>
                              ) : (
                                "no currencies"
                              )}
                            </span>
                          </li>
                          <li className="details-languages">
                            languages:{" "}
                            <span>
                              {languages ? (
                                <>
                                  {languages
                                    .map((language) => {
                                      return (
                                        <span key={language.name}>
                                          {language.name}
                                        </span>
                                      );
                                    })
                                    .reduce((prev, curr) => [prev, ", ", curr])}
                                </>
                              ) : (
                                "no languages"
                              )}
                            </span>
                          </li>
                        </ul>
                      </li>

                      <li className="details-borders">
                        <span className="mb-2">borders countries:</span>{" "}
                        <div className="border">
                          {borders ? (
                            <>
                              {borders
                                ?.map((border) => {
                                  return (
                                    <span className="border-item" key={border}>
                                      {border}
                                    </span>
                                  );
                                })
                                .reduce((prev, curr) => [prev, " ", curr])}
                            </>
                          ) : (
                            <span className="api_placeholder">no borders</span>
                          )}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Country;
