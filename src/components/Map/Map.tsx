import { useState } from "react";
import { Improvement } from "../../models/Improvement";
import "./Map.css";
import { AddImprovementDialog } from "./MapComponents/AddImprovementDialog";
import { Tile } from "./MapComponents/Tile";
import { TileData } from "../../models/Tile";
import { House } from "../../store/ImprovementsCost";
import { EditImprovementDialog } from "./MapComponents/EditImprovementDialog";

export function Map() {

  const [selectedTile, setSelectedTile] = useState<TileData | undefined>(undefined)

  const handleTileClick = (tile: TileData) => {
    setSelectedTile (tile)
    return;
    
    
  };

  // function GameboardRow({ rowNumber, handleTileClick }: any) {
  //   const tiles: TileData[] =Array.from(Array(5).keys()).map((_, index) => ({index: index, improvement: undefined}));
  
  //   return (
  //     <div className="gameboard-row">
  //       {tiles.map((tile, index) => (
  //         <div key={rowNumber + index} className="tile" onClick={handleTileClick}>
  //           <Tile value={rowNumber + index} />
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  // move tiles to a state variable
  // inside the onAdd function I was working on, you will want to call setTiles() and use the splice method to change the item
  // there are slides that show how to splice 
  // 

  const tiles: TileData[] =Array.from(Array(5).keys()).map((_, index) => ({index: index, improvement: undefined}));

  return (
    <div>
      <div className="gameboard">
        {Array.from(Array(5).keys()).map((index) => (
          <div className="gameboard-row">
          {tiles.map((tile, index) => (
            <div key={index} className="tile" onClick={() => handleTileClick(tile)}>
              <Tile value={tile} />
            </div>
          ))}
        </div>
        ))}
      </div>
      
      {(selectedTile !== undefined && selectedTile.improvement === undefined) && <AddImprovementDialog  onAdd={(improvement) =>{
        
        setSelectedTile({...selectedTile, improvement: improvement})}} onClose={() => {}}></AddImprovementDialog>}
      
      
       {selectedTile?.improvement !== undefined && <EditImprovementDialog onClose={() => {}} onUpgrade={() => {}} onDowngrade={() => {}} onRemove={() => {}} improvement={selectedTile?.improvement}></EditImprovementDialog>}
      </div>
    );
}
//   const [improvement, setImprovement] = useState<Improvement | null>(null);

//   const handleUpgrade = (improvement: Improvement) => {
//     // Handle the upgrade logic here
//     console.log("Upgrade improvement:", improvement);
//   };

//   const handleDowngrade = (improvement: Improvement) => {
//     // Handle the downgrade logic here
//     console.log("Downgrade improvement:", improvement);
//   };

//   const handleRemove = (improvement: Improvement) => {
//     // Handle the remove logic here
//     console.log("Remove improvement:", improvement);
//   };

//   const handleAdd = (improvement: Improvement) => {
//     // Handle the add logic here
//     console.log("Add improvement:", improvement);
//   };

//   const handleClose = (improvement: Improvement) => {
//     // Handle the close logic here
//     console.log("Close improvement dialog:", improvement);
//   };
//   const [showDialog, setShowDialog] = useState(false);
//   const [selectedTile, setSelectedTile] = useState<Improvement | undefined>(
//     undefined
//   );

//   const handleTileClick = () => {
//     return console.log('clicked')
    
//   };
//   const handleDialogClose = () => {
//     setShowDialog(false);
//     setSelectedTile(undefined);
//   };

//   return (
//     <div className="gameboard">
//       <div className="gameboard-row">
//         <div className="tile" defaultValue={1} onClick={handleTileClick}>
//         <Tile value={1} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//         <Tile value={2} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={3} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={4} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={5} />
//         </div>
//       </div>
//       <div className="gameboard-row">
//       <div className="tile" onClick={handleTileClick}>
//           <Tile value={6} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={7} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={8} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={9} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={10} />
//         </div>
//       </div>
//       <div className="gameboard-row">
//       <div className="tile" onClick={handleTileClick}>
//           <Tile value={11} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={12} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={13} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={14} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={15} />
//         </div>
//       </div>
//       <div className="gameboard-row">
//       <div className="tile" onClick={handleTileClick}>
//           <Tile value={16} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={17} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={18} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={19} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={20} />
//         </div>
//       </div>
//       <div className="gameboard-row">
//       <div className="tile" onClick={handleTileClick}>
//           <Tile value={21} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={22} />
//         </div>
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={23} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={24} />
//         </div>{" "}
//         <div className="tile" onClick={handleTileClick}>
//           <Tile value={25} />
//         </div>
//       </div>
//       {/* {showDialog && (
//         <AddImprovementDialog
//           improvement={selectedTile}
//           onClose={handleDialogClose}
//           //onUpgrade={handleUpgrade}
//           // onDowngrade={handleDowngrade}
//           //onRemove={handleRemove}
//           onAdd={handleAdd}
//         />
//       )} */}
//     </div>
//   );
// }
