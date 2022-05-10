import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../function";

function FilterByRegion({ countries, regionname }) {
  const [countriesByRegion, setCountriesByRegion] = useState([]);

  const filtered = () => {
    const filter = countries
      .map((country) => country)
      .filter((country) =>
        country.region.toLowerCase().includes(regionname.toLowerCase())
      );
    setCountriesByRegion(filter);
  };

  useEffect(() => {
    filtered();
  }, [countriesByRegion]);

  return (
    <div>
      <div className="countries">
        <div className="container-xl">
          {countriesByRegion.map((item) => {
            const { flags, name, population, region, capital, nativeName } =
              item;
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
    </div>
  );
}

export default FilterByRegion;
