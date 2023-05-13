import { useState } from "react";
import { Improvement } from "../../models/Improvement";
import "./Map.css";
import { AddImprovementDialog } from "./MapComponents/AddImprovementDialog";
import { Tile } from "./MapComponents/Tile";

export function Map() {

  const [improvement, setImprovement] = useState<Improvement | null>(null)



  const handleUpgrade = (improvement: Improvement) => {
    // Handle the upgrade logic here
    console.log("Upgrade improvement:", improvement);
  };

  const handleDowngrade = (improvement: Improvement) => {
    // Handle the downgrade logic here
    console.log("Downgrade improvement:", improvement);
  };

  const handleRemove = (improvement: Improvement) => {
    // Handle the remove logic here
    console.log("Remove improvement:", improvement);
  };

  const handleAdd = (improvement: Improvement) => {
    // Handle the add logic here
    console.log("Add improvement:", improvement);
  };

  const handleClose = (improvement: Improvement) => {
    // Handle the close logic here
    console.log("Close improvement dialog:", improvement);
  };
  const [showDialog, setShowDialog] = useState(false);
  const [selectedTile, setSelectedTile] = useState<Improvement | undefined>(undefined);

  const handleTileClick = (improvement: Improvement) => {
    setSelectedTile(improvement);
    setShowDialog(true);
  };
  const handleDialogClose = () => {
    setShowDialog(false);
    setSelectedTile(undefined);
  };

  return (
    <div className="gameboard">
      <div className="gameboard-row">
        
          <Tile/>
      
        <div className="tile">
          <Tile/>
        </div>
        <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
        <Tile/>
        </div>
        <div className="tile">
        <Tile/>
        </div>
        <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
        <Tile/>
        </div>
        <div className="tile">
        <Tile/>
        </div>
        <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
        <Tile/>
        </div>
        <div className="tile">
        <Tile/>
        </div>
        <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
        <Tile/>
        </div>
        <div className="tile">
        <Tile/>
        </div>
        <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div> <div className="tile">
        <Tile/>
        </div>
      </div>
      {/* {showDialog && (
        <AddImprovementDialog
          improvement={selectedTile}
          onClose={handleDialogClose}
          //onUpgrade={handleUpgrade}
          // onDowngrade={handleDowngrade}
          //onRemove={handleRemove}
          onAdd={handleAdd}
        />
      )} */}
    </div>

  );
}

