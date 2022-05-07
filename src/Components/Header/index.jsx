import React, { useState } from "react";
function Header() {
  const [darkmode, setDarkmode] = useState(false);

  const modeSelector = () => {
    document.body.classList.toggle("dark_theme");
    setDarkmode(!darkmode);
  };

  return (
    <>
      <header className="header">
        <div className="container-xl d-flex justify-content-between">
          <h1 className="logo">Where in the World?</h1>
          <button
            type="button"
            className="btn theme-btn d-flex align-items-center"
            onClick={modeSelector}
          >
            {darkmode ? (
              <i className="fa-solid fa-sun me-1"></i>
            ) : (
              <i className="fa-solid fa-moon me-1"></i>
            )}

            <p>{darkmode ? "Light Mode" : "Dark Mode"}</p>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
