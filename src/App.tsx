import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Map } from "./components/Map/Map"
import { ResourceView } from "./components/ResourcesView/ResourcesView";
import  { Improvement } from "./models/Improvement";
import { Resource } from "./models/Resource";

function App() {
  const handleTileClick = (tileIndex: number) => {
    // Handle the tile click event
    console.log("Tile clicked in parent component:", tileIndex);
  };
  const improvements: Improvement[] = [];
  const resources: Resource[] = [];
  return (
    <div className="App">
      <Map onTileClick={handleTileClick} improvements={improvements} resources={resources}></Map>
      <ResourceView></ResourceView>
    </div>
  );
}

export default App;
