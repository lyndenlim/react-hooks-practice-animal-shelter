import React, {useState} from "react";

function Pet({petInfo}) {
  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(isClicked => !isClicked)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {petInfo.gender === "male" ? "♂" : "♀"}
          {petInfo.name}
        </span>
        <div className="meta">
          <span className="date">{petInfo.type}</span>
        </div>
        <div className="description">
          <p>Age: {petInfo.age}</p>
          <p>Weight: {petInfo.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isClicked ? <button className="ui disabled button">Already adopted</button> : <button onClick={handleClick} className="ui primary button">Adopt pet</button>}
        
        
      </div>
    </div>
  );
}

export default Pet;
