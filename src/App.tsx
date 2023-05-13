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
const ImprovementCosts: Improvement[] = [
  // Define your improvement objects here
];

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTile, setSelectedTile] = useState<Improvement | undefined>(undefined);

  const handleClose = (improvement?: Improvement) => {
    setSelectedTile(undefined);
    if (improvement) {
      setShowDialog(true);
      setSelectedTile(improvement);
    }
  };

  const handleAdd = (improvement: Improvement) => {
    // Handle the add event
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setSelectedTile(undefined);
  };

  return (
    <div className="App">
      <Map />
      <ResourceView />
      {ImprovementCosts.map((improvement) => (
        <AddImprovementDialog
          key={improvement.type}
          improvement={improvement}
          onClose={handleClose}
          onAdd={handleAdd}
        />
      ))}
      {showDialog && (
        <AddImprovementDialog
          improvement={selectedTile}
          onClose={handleDialogClose}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}

export default App;





// function App() {
//   // const handleTileClick = (tileIndex: number) => {
//   //   // Handle the tile click event
//   //   console.log("Tile clicked in parent component:", tileIndex);
//   // };
//   // const improvements: Improvement[] = [];
//   // // const resources: Resource[] = [];
//   // // onUpgrade
//   // // onDowngrade
  

//   const [resources, setResources] = useState<Resource[]>([
//     {
//       type: "Lumber",
//       amount: +5
//     },
//     {
//       type: "Grain",
//       amount: +5
//     },
//     {
//       type: "Water",
//       amount: +5
//     },
//     {
//       type: "Sheep",
//       amount: +1
//     }
//   ]);



//   return (
//     <div className="App">
//       {/* <Map onTileClick={handleTileClick} improvements={improvements} resources={resources}></Map>
//       <ResourceView></ResourceView>*/}
//       { <AddImprovementDialog
//   improvement={improvement} // Pass the improvement object
//   onClose={handleClose} // Provide a function that handles the close event
//   onAdd={handleAdd} // Provide a function that handles the add event
// />
//  }

//       {/* onAdd={newImprovement => setResources([...resources, newContact])} */}
//     </div>
//   );
// }

// export default App;
