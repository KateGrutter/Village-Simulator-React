import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { AddImprovementDialog } from "./AddImprovementDialog";
import { TileData } from "../../../models/Tile";
import { title } from "process";


interface TileProps {
  tile: TileData;
  selectedTile: TileData | undefined;
  level: Improvement | undefined
}


export function Tile({ tile, level }: TileProps) {
  //console.log('Rendering Tile:', tile);
  const hasImprovement = tile.improvement !== undefined;

  return (
    <div className={`tile ${hasImprovement ? 'has-improvement' : ''}`}>
      {hasImprovement && tile.improvement && (
        <div className="insideTile">
          <img src={tile.improvement.icon} alt="Improvement Icon" />
          <p className="levelNumber">{level?.level}</p>
        </div>
      )}
    </div>
  );
}