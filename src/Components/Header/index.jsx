import React, { useState } from "react";
function Header() {
  const [isDarkmode, setIsDarkmode] = useState(false);
  let theme;
  // let storedTheme = localStorage.getItem("theme");

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === "dark_theme" || theme === "") {
    document.body.classList.add(theme);
  } else {
    document.body.classList.add("");
  }

  // if (isDarkmode == true) {
  //   theme = "dark_theme";
  // } else {
  //   theme = "";
  // }
  // localStorage.setItem("theme", theme);

  console.log(theme);

  const themeSelector = (e) => {
    // document.body.classList.toggle("dark_theme");
    setIsDarkmode(!isDarkmode);
  };

  // if (isDarkmode == true) {
  // document.body.classList.add(theme);
  // } else {
  //   document.body.classList.remove(theme);
  // }

  // if(localStorage){
  //   localStorage.setItem("dark_theme", "");
  // }

  // console.log("theme is " + theme);

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
