import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Map } from "./components/Map/Map"
import { ResourceView } from "./components/ResourcesView/ResourcesView";
import { Improvement } from "./models/Improvement";
import { ImprovementCosts } from "./store/ImprovementsCost";
import { Resource } from "./models/Improvement";

function App() {
  // const handleTileClick = (tileIndex: number) => {
  //   // Handle the tile click event
  //   console.log("Tile clicked in parent component:", tileIndex);
  // };
  // const improvements: Improvement[] = [];

  const [resources, setResources] = useState<Resource[]>([
    {
      type: "Lumber",
      amount: +5
    },
    {
      type: "Grain",
      amount: +5
    },
    {
      type: "Water",
      amount: +5
    },
    {
      type: "Sheep",
      amount: +1
    }
  ]);

  function handleResourceUpdate(i: number) {
    setResources(prevResources => {
      const prevResource = prevResources[i];
      let newResource = { ...prevResource, newResource: !prevResource };

      return [
        ...prevResources.slice(0, i), newResource,
        ...prevResources.slice(i + 1)];
    })
  }

  function Arithmetic() {
    // if (selectedImprovement.cost.type === Resource[].type && selectedImprovement.cost.amount > Resource[].amount) {
    //   const newResourceAmount = selectedImprovement.cost.amount - resource.amount;
    //   selectedImprovement.resourceProduced.amount + resource.amount;
  }


  return (
    <div className="App">
      <Map></Map>
    </div>
  );
}

export default App;
