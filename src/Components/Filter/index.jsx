import React, { useState } from "react";
import { Link } from "react-router-dom";

function Filter({ countries }) {
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState("");
  const [filterCountry, setFilterCountry] = useState([]);
  const [filterRegion, setFilterRegion] = useState();

  console.log(countries.map((c) => c.region));

  const showFilterChoices = () => {
    setShowFilter(!showFilter);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filterValue = countries
      .map((country) => country)
      .filter((country) => {
        return country.name.toLowerCase().includes(value.toLowerCase());
      });

    if (value == "") {
      setFilterCountry([]);
    } else {
      setFilterCountry(filterValue);
    }
  };
  return (
    <>
      <div className="filter">
        <div className="container-xl">
          <div className="search-container">
            <div className="filter__search-bar">
              <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Search for a country..."
                value={search}
                onChange={handleFilter}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            {filterCountry.length != 0 && (
              <div className="search_results">
                {filterCountry.map((country) => {
                  const { id, name, flags } = country;
                  return (
                    <Link to={`/${name}`} key={name}>
                      <span className="search_results-item">
                        <img
                          src={flags.svg}
                          className="img-fluid item-flag"
                          alt={name}
                        />
                        <p className="item-name">{name}</p>
                      </span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="filter__region">
            {/* <select className="form-select">
              <option hidden>Filter By Region</option>
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Americas">Americas</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select> */}
            <button type="button" className="btn" onClick={showFilterChoices}>
              Filter by Region <i className="fa-solid fa-angle-down"></i>
            </button>
            {showFilter ? (
              <ul className="list-regions">
                <li className="list-item" onClick={showFilterChoices}>
                  africa
                </li>
                <li className="list-item" onClick={showFilterChoices}>
                  america
                </li>
                <li className="list-item" onClick={showFilterChoices}>
                  asia
                </li>
                <li className="list-item" onClick={showFilterChoices}>
                  europe
                </li>
                <li className="list-item" onClick={showFilterChoices}>
                  oceania
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;

// https://www.frontendmentor.io/solutions/countries-list-B1k9mm775