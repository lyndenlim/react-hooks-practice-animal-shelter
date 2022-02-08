import React, { useState } from "react";

function Filters({setFilters}) {
  const [category, setCategory] = useState("all")

  function handleClick() {
    setFilters({type: category})
  }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select onChange={(e) => setCategory(e.target.value)} value={category} name="type" id="type" aria-label="type">
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button onClick={handleClick} className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
