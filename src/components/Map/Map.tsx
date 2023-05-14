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
    setSelectedTile(tile)
    return;
  };

  // move tiles to a state variable - does it need type tiles: TileData[] ??
  // inside the onAdd function I was working on, you will want to call setTiles() and use the splice method to change the item
  // there are slides that show how to splice 

  const [tiles, setTiles] = useState(Array.from(Array(5).keys()).map((_, index) => ({ index: index, improvement: undefined })))

  //const tiles: TileData[] = Array.from(Array(5).keys()).map((_, index) => ({ index: index, improvement: undefined }));

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

      {(selectedTile !== undefined && selectedTile.improvement === undefined) && <AddImprovementDialog
        onAdd={(improvement) => {
          setSelectedTile({ ...selectedTile, improvement: improvement })
          setTiles(tiles => [...tiles.slice(0, tiles.index), newTile,
          ...tiles.slice(index + 1)]);
        }}
        onClose={() => { }}></AddImprovementDialog>}


      {selectedTile?.improvement !== undefined && <EditImprovementDialog onClose={() => { }} onUpgrade={() => { }} onDowngrade={() => { }} onRemove={() => { }} improvement={selectedTile?.improvement}></EditImprovementDialog>}
    </div>
  );
}