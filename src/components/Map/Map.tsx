import { useState } from "react";
import { Improvement } from "../../models/Improvement";
import "./Map.css";
import { AddImprovementDialog } from "./MapComponents/AddImprovementDialog";
import { Tile } from "./MapComponents/Tile";
import { TileData } from "../../models/Tile";
import { House } from "../../store/ImprovementsCost";
import { EditImprovementDialog } from "./MapComponents/EditImprovementDialog";

export function Map() {
  const [selectedTile, setSelectedTile] = useState<TileData | undefined>(undefined);

  const handleTileClick = (tile: TileData) => {
    setSelectedTile(tile);
  };

  const numRows = 5;
  const numColumns = 5;

  const [tiles, setTiles] = useState<TileData[]>(() => {
    const initialTiles: TileData[] = [];
    for (let row = 0; row < numRows; row++) {
      for (let column = 0; column < numColumns; column++) {
        initialTiles.push({ index: row * numColumns + column, improvement: undefined });
      }
    }
    return initialTiles;
  });

  const handleAddImprovement = (improvement: Improvement, index: number) => {
    setTiles((prevTiles) => {
      const updatedTiles = prevTiles.map((tile) => {
        if (tile.index === index) {
          return { ...tile, improvement: improvement };
        }
        return tile;
      });
      return updatedTiles;
    });
    setSelectedTile((prevSelectedTile) => {
      if (prevSelectedTile && prevSelectedTile.index === index) {
        return { ...prevSelectedTile, improvement: improvement };
      }
      return prevSelectedTile;
    });
  };

  return (
    <div>
      <div className="gameboard">
        {Array.from(Array(numRows).keys()).map((rowIndex) => (
          <div className="gameboard-row" key={rowIndex}>
            {tiles
              .filter((tile) => Math.floor(tile.index / numColumns) === rowIndex) // Filter tiles for the current row
              .map((tile) => (
                <div key={tile.index} className="tile" onClick={() => handleTileClick(tile)}>
                  <Tile value={tile} />
                </div>
              ))}
          </div>
        ))}
      </div>

      {selectedTile !== undefined && selectedTile.improvement === undefined && (
        <AddImprovementDialog
          onAdd={handleAddImprovement}
          onClose={() => {}}
          index={selectedTile.index || 0} // Pass the index of the selected tile or a default value
        />
      )}
    </div>
  );
}
