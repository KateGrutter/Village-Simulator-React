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

export function Map({ gridSize }: MapProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedTile, setSelectedTile] = useState<TileData | undefined>(undefined);
  // State for the grid of tiles
  const [tiles, setTiles] = useState<TileData[][]>(
     // Initialize the grid with empty tiles
    Array.from(Array(gridSize), (_, rowIndex) =>
      Array.from(Array(gridSize), (_, tileIndex) => ({
        rowIndex,
        tileIndex,
        improvement: undefined,
        index: rowIndex * gridSize + tileIndex, // Add the 'index' property for unique identification
      }))
    )
  );

  const handleTileClick = (rowIndex: number, tileIndex: number) => {
    const clickedTile = tiles[rowIndex][tileIndex];
    setSelectedTile(clickedTile); // Set the selected tile
    setIsDialogOpen(true); // Show the dialog
  };

  const handleAddImprovement = (
    improvement: Improvement,
    rowIndex: number,
    tileIndex: number
  ) => {
    // console.log("Adding improvement:", improvement);
    // console.log("Row index:", rowIndex);
    // console.log("Tile index:", tileIndex);
    setTiles((prevTiles) => {
      const updatedTiles = [...prevTiles];
      updatedTiles[rowIndex][tileIndex].improvement = improvement; // Add the improvement to the selected tile
      // console.log("Updated tiles:", updatedTiles);
      return updatedTiles;
    });
  };

  // console.log("selectedTile:", selectedTile);

  return (
    <div>
      <div className="gameboard">
        {tiles.map((row, rowIndex) => (
          <div className="gameboard-row" key={rowIndex}>
            {row.map((tile) => (
              <div
                className="tile"
                key={tile.index}
                onClick={() => handleTileClick(tile.rowIndex, tile.tileIndex)}  // Call the handleTileClick function with the tile's row and tile index
              >
                <Tile tile={tile} selectedTile={selectedTile} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {selectedTile !== undefined && selectedTile.improvement === undefined && (
        // Render the AddImprovementDialog if a tile is selected and it doesn't have an improvement
        <AddImprovementDialog
          onAdd={(improvement) =>
            handleAddImprovement(improvement, selectedTile.rowIndex, selectedTile.tileIndex)
          }
          onClose={() => setSelectedTile(undefined)}
          rowIndex={selectedTile.rowIndex}
          tileIndex={selectedTile.tileIndex}
          index={selectedTile.index} // Add this line
        />
      )}

      {selectedTile?.improvement !== undefined && (
        // Render the EditImprovementDialog if a tile is selected and it has an improvement
        <EditImprovementDialog
          onClose={() => setSelectedTile(undefined)}
          onUpgrade={() => {}}
          onDowngrade={() => {}}
          onRemove={() => {}}
          improvement={selectedTile?.improvement}
        />
      )}
    </div>
  );
}