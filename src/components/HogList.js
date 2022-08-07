import React from "react";
import Hog from "./Hog";

function HogList({ hogs }){
  return(
    <div className="ui grid container">
      {hogs.map(value => <Hog hogInfo={value} />)}
    </div>
  )
}

export default HogList; 