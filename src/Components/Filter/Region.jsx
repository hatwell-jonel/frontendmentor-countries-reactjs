import React from "react";
import { useParams } from "react-router-dom";
import Filter from "./index";

function Region() {
  const { region } = useParams();
  return (
    <div>
      <Filter />
      <div className="container">
        <h1>region</h1>
      </div>
    </div>
  );
}

export default Region;
