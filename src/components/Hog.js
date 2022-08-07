import React from "react";

function Hog ({ hogInfo }) {

  return (
    <div class="ui card">
      <div class="image">
        <img src= {hogInfo.image} />
      </div>
      <div class="content">
        <a class="header">{hogInfo.name}</a>
        <div class="meta">
          <span class="specialty"> Status: {hogInfo.greased ? "Greased" : "Not Greased"}</span>
        </div>
        <div class="description">
        {hogInfo.name} is known for {hogInfo.specialty} and weighs {hogInfo.weight} pounds
        </div>
      </div>
      <div class="extra content">
        <p>Highest Medal Achieved: {hogInfo["highest medal achieved"]}</p>
      </div>
    </div>
  )

}

export default Hog;