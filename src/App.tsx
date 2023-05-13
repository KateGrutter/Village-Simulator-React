import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Map } from "./components/Map/Map"
import { ResourceView } from "./components/ResourcesView/ResourcesView";
import { Improvement } from "./models/Improvement";
import { Resource } from "./models/Resource";
import { AddImprovementDialog } from "./components/Map/MapComponents/AddImprovementDialog";
// import { stockUpdate } from "./functions/ResourcesFunctions";

function App() {
  // const handleTileClick = (tileIndex: number) => {
  //   // Handle the tile click event
  //   console.log("Tile clicked in parent component:", tileIndex);
  // };
  // const improvements: Improvement[] = [];
  // // const resources: Resource[] = [];
  // // onUpgrade
  // // onDowngrade

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



  return (
    <div className="App">
      {/* <Map onTileClick={handleTileClick} improvements={improvements} resources={resources}></Map>
      <ResourceView></ResourceView>*/}
      {/* <AddImprovementDialog></AddImprovementDialog> */}

      {/* onAdd={newImprovement => setResources([...resources, newContact])} */}
    </div>
  );
}

export default App;
