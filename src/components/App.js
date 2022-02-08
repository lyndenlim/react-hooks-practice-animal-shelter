import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const url = filters.type === "all" ? "http://localhost:3001/pets" : `http://localhost:3001/pets?type=${filters.type}`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setPets(data))
  }, [filters])

  const petInfo = pets.map(pet => {
    return <PetBrowser key={pet.id} petInfo={pet} />
  })

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters setFilters={setFilters}/>
          </div>
          <div className="twelve wide column">
            {petInfo}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
