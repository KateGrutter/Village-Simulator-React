import { useState } from "react";
import { Improvement } from "../../models/Improvement";
import "./Map.css";
import { AddImprovementDialog } from "./MapComponents/AddImprovementDialog";
import { Tile } from "./MapComponents/Tile";
import { TileData } from "../../models/Tile";
import { House } from "../../store/ImprovementsCost";
import { EditImprovementDialog } from "./MapComponents/EditImprovementDialog";
import peopleIcon from "../../assets/images/people.png";
import fieldIcon from "../../assets/images/field.png";
import lumberIcon from "../../assets/images/lumberMill.png";
import sheepIcon from "../../assets/images/sheep.png";
import wellIcon from "../../assets/images/well.png";

interface MapProps {
  gridSize: number;
}

export function Map() {
  const [selectedTile, setSelectedTile] = useState<TileData | undefined>(
    undefined
  );

  const handleTileClick = (tile: TileData) => {
    setSelectedTile({...tile});
  };

  // move tiles to a state variable - does it need type tiles: TileData[] ??
  // inside the onAdd function I was working on, you will want to call setTiles() and use the splice method to change the item
  // there are slides that show how to splice
  const [tiles, setTiles] = useState<TileData[]>(Array.from(Array(5).keys()).map((_, index) => ({ index: index, improvement: undefined })))
  //const tiles: TileData[] = Array.from(Array(5).keys()).map((_, index) => ({ index: index, improvement: undefined }));
  console.log("selectedTile:", selectedTile); // Add a console.log statement
  return (
    <div>
      <div className="gameboard">
        {Array.from(Array(5).keys()).map((rowIndex) => (
          <div className="gameboard-row" key={rowIndex}>
            {tiles.map((tile, tileIndex) => (
              <div
                className="tile"
                key={tileIndex}
                onClick={() => handleTileClick(tile)}
              >
                <Tile tile={tile} selectedTile={selectedTile} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedTile !== undefined && selectedTile.improvement === undefined && (
        <AddImprovementDialog
          onAdd={(improvement: Improvement, index: number) => {
            setSelectedTile({ ...selectedTile, improvement: improvement });
            setTiles((prev) =>
              prev.map((tile, i) =>
                i === index ? { ...tile, improvement } : tile
              )
            );
          }}
          onClose={() => {}}
          index={selectedTile.index}
        ></AddImprovementDialog>
      )}

      {selectedTile?.improvement !== undefined && (
        <EditImprovementDialog
          onClose={() => {}}
          onUpgrade={() => {}}
          onDowngrade={() => {}}
          onRemove={() => {}}
          improvement={selectedTile?.improvement}
        ></EditImprovementDialog>
      )}
    </div>
  );
}
