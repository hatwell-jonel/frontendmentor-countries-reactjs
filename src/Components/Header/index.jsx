import React, { useState, useEffect } from "react";
function Header() {
  const [isDarkmode, setIsDarkmode] = useState(false);

  const themeSelector = (e) => {
    setIsDarkmode(!isDarkmode);
    document.body.classList.toggle("dark_theme");
  };

  return (
    <>
      <header className="header">
        <div className="container-xl d-flex justify-content-between">
          <h1 className="logo">Where in the World?</h1>
          <button
            type="button"
            className="btn theme-btn d-flex align-items-center"
            onClick={themeSelector}
          >
            {isDarkmode ? (
              <i className="fa-solid fa-sun me-1"></i>
            ) : (
              <i className="fa-solid fa-moon me-1"></i>
            )}

            <p>{isDarkmode ? "Light Mode" : "Dark Mode"}</p>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
