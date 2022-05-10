import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../function";

function Countries({ countries }) {
  return (
    <div className="countries">
      <div className="container-xl">
        {countries.map((country) => {
          const { flags, name, population, region, capital, nativeName } =
            country;
          return (
            <Link to={`/${name}`} key={name}>
              <div className="country">
                <div className="country__flag">
                  <img
                    src={flags?.svg || flags?.png}
                    alt={name}
                    className="img-fluid"
                  />
                </div>
                <div className="country__details">
                  <p className="country__details-name">
                    {name ? name : nativeName}
                  </p>
                  <p className="country__details-population">
                    <span>population:</span> {formatNumber(population)}
                  </p>
                  <p className="country__details-region">
                    <span>region:</span> {region ? region : "-"}
                  </p>
                  <p className="country__details-capital">
                    <span>capital :</span>
                    {capital ? capital : "-"}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
