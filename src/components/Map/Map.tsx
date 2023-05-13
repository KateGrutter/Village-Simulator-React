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
        
          <Tile value={1} onTileClick={}/>
      
        <div className="tile">
          <Tile value={2}/>
        </div>
        <div className="tile">
        <Tile value={3}/>
        </div> <div className="tile">
        <Tile value={4}/>
        </div> <div className="tile">
        <Tile value={5}/>
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
        <Tile value={6}/>
        </div>
        <div className="tile">
        <Tile value={7}/>
        </div>
        <div className="tile">
        <Tile value={8}/>
        </div> <div className="tile">
        <Tile value={9}/>
        </div> <div className="tile">
        <Tile value={10}/>
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
        <Tile value={11}/>
        </div>
        <div className="tile">
        <Tile value={12}/>
        </div>
        <div className="tile">
        <Tile value={13}/>
        </div> <div className="tile">
        <Tile value={14}/>
        </div> <div className="tile">
        <Tile value={15}/>
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
        <Tile value={16}/>
        </div>
        <div className="tile">
        <Tile value={17}/>
        </div>
        <div className="tile">
        <Tile value={18}/>
        </div> <div className="tile">
        <Tile value={19}/>
        </div> <div className="tile">
        <Tile value={20}/>
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
        <Tile value={21}/>
        </div>
        <div className="tile">
        <Tile value={22}/>
        </div>
        <div className="tile">
        <Tile value={23}/>
        </div> <div className="tile">
        <Tile value={24}/>
        </div> <div className="tile">
        <Tile value={25}/>
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

