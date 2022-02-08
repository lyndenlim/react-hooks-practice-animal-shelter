import React from "react";
import Pet from "./Pet";

function PetBrowser({ petInfo }) {
  return <div className="ui cards"><Pet petInfo={petInfo}/></div>;
}

export default PetBrowser;
