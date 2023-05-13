import { useState } from "react";
import { Improvement } from "../../models/Improvement";
import "./Map.css";
import { MapProps } from "./MapComponents/MapProps";
import { AddImprovementDialog } from "./MapComponents/AddImprovementDialog";
import { Tile } from "./MapComponents/Tile";

export function Map() {

  return (
    <div className="gameboard">
      <div className="gameboard-row">
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
      </div>
      <div className="gameboard-row">
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
        <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div> <div className="tile">
          <Tile
            improvement={initialImprovement}
            onClose={handleClose}
            onUpgrade={handleUpgrade}
            onDowngrade={handleDowngrade}
            onRemove={handleRemove}
            onAdd={handleTileClick}
          />
        </div>
      </div>
      {showDialog && (
        <AddImprovementDialog
          improvement={selectedTile}
          onClose={handleDialogClose}
          //onUpgrade={handleUpgrade}
          // onDowngrade={handleDowngrade}
          //onRemove={handleRemove}
          onAdd={handleAdd}
        />
      )}
    </div>

  );
}

