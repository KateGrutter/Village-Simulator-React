import { useState } from "react";
import { Improvement } from "../../models/Improvement";
import "./Map.css";
import { AddImprovementDialog } from "./MapComponents/AddImprovementDialog";
import { Tile } from "./MapComponents/Tile";
import { TileData } from "../../models/Tile";
import { Resource } from "../../models/Improvement";

import { EditImprovementDialog } from "./MapComponents/EditImprovementDialog";

export function Map(props: { gridSize: number, handleResourceUpdate: (improvement: Improvement) => void, resources: Resource[], setResources: any }) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [selectedTile, setSelectedTile] = useState<TileData | undefined>(undefined);

  // State for the grid of tiles
  const [tiles, setTiles] = useState<TileData[][]>(
    // Initialize the grid with empty tiles
    Array.from(Array(props.gridSize), (_, rowIndex) =>
      Array.from(Array(props.gridSize), (_, tileIndex) => ({
        rowIndex,
        tileIndex,
        improvement: undefined,
        index: rowIndex * props.gridSize + tileIndex, // Add the 'index' property for unique identification
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

    const canProduce = improvement.cost.every((costResource) => {
      const matchingResource = props.resources.find(
        (resource) => resource.type === costResource.type
      );
      console.log('Matching resource:', matchingResource);
      console.log('Cost resource:', costResource);

      if (!matchingResource || matchingResource.amount < costResource.amount) {
        console.log('Can produce: ');
        console.log('Insufficient resources to produce improvement');
        return false;
      }
      return true;
    });
    console.log('Resources:', props.resources);
    console.log('Can produce:', canProduce);
    if (canProduce) {
      setTiles((prevTiles) => {
        const updatedTiles = [...prevTiles];
        updatedTiles[rowIndex][tileIndex].improvement = improvement;
        props.handleResourceUpdate(improvement); // Add this line to update resources
        return updatedTiles;
      });

      // Deduct the cost from resources
      props.setResources((prevResources: any) => {
        const updatedResources = [...prevResources];
        for (const costResource of improvement.cost) {
          const resourceIndex = updatedResources.findIndex((res) => res.type === costResource.type);
          if (resourceIndex !== -1) {
            updatedResources[resourceIndex].amount -= costResource.amount;
          }
        }
        return updatedResources;
      });
    } else {
      console.log("Insufficient resources to produce improvement");
    }
  };

  const handleRemoveImprovement = () => {
    const improvement = selectedTile?.improvement;
    if (improvement) {
      // Add the improvement's cost back to resources
      props.setResources((prevResources: Resource[]) => {
        const updatedResources = [...prevResources];
        for (const costResource of improvement.cost) {
          const resourceIndex = updatedResources.findIndex((res) => res.type === costResource.type);
          if (resourceIndex !== -1) {
            updatedResources[resourceIndex].amount += costResource.amount;
          }
        }
        return updatedResources;
      });

      // Remove the improvement from the tile
      setTiles((prevTiles) => {
        const updatedTiles = [...prevTiles];
        updatedTiles[selectedTile!.rowIndex][selectedTile!.tileIndex].improvement = undefined;
        return updatedTiles;
      });

      props.handleResourceUpdate(improvement); // Update the resources view
      setSelectedTile(undefined);
    }
  };
  return (
    <div>
      <div className="gameboard">
        {tiles.map((row, rowIndex) => (
          <div className="gameboard-row" key={rowIndex}>
            {row.map((tile) => (
              <div
                className="tile"
                key={tile.index}
                onClick={() => handleTileClick(tile.rowIndex, tile.tileIndex)} // Call the handleTileClick function with the tile's row and tile index
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
          onUpgrade={() => { }}
          onDowngrade={() => { }}
          onRemove={(handleRemoveImprovement)}
          improvement={selectedTile?.improvement}
          resources={props.resources}
          setResources={props.setResources}
        />
      )}
    </div>
  );
}