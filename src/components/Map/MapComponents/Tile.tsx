import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { AddImprovementDialog } from "./AddImprovementDialog";
import { TileData } from "../../../models/Tile";
import { title } from "process";


interface TileProps {
    tile: TileData;
    selectedTile: TileData | undefined;
  }
  
  export function Tile({ tile }: TileProps) {
    //console.log('Rendering Tile:', tile);
    const hasImprovement = tile.improvement !== undefined;
  
    return (
      <div className={`tile ${hasImprovement ? 'has-improvement' : ''}`}>
        {hasImprovement && tile.improvement && (
          <div className="insideTile">
          <img src={tile.improvement.icon} alt="Improvement Icon" />
          <p className="levelNumber">{tile.improvement?.level}</p>
          </div>
        )}
      </div>
    );
  }



// export function Tile(props: {value: TileData}) {
//     return (
//         <div className="tile">
//         {props.value.improvement === undefined ? '' : props.value.improvement.type}
//         </div>
//     )
// }
// props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onUpgrade: (improvement: Improvement) => void, onDowngrade: (improvement: Improvement) => void, onRemove: (improvement: Improvement) => void, onAdd: (improvement: Improvement) => void }
{/* <EditImprovementDialog improvement={props.improvement} onUpgrade={props.onUpgrade} onDowngrade={props.onDowngrade} onClose={props.onClose} onRemove={props.onRemove}></EditImprovementDialog>
            <AddImprovementDialog onAdd={props.onAdd} onClose={props.onClose} improvement={props.improvement} /> */}
// {props.improvement.type} {props.improvement.level}{props.improvement.resourceProduced.amount}{props.improvement.cost.map(newCost => props.improvement.cost)}
  
// props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onUpgrade: (improvement: Improvement) => void, onDowngrade: (improvement: Improvement) => void, onRemove: (improvement: Improvement) => void, onAdd: (improvement: Improvement) => void }
{/* <EditImprovementDialog improvement={props.improvement} onUpgrade={props.onUpgrade} onDowngrade={props.onDowngrade} onClose={props.onClose} onRemove={props.onRemove}></EditImprovementDialog>
            <AddImprovementDialog onAdd={props.onAdd} onClose={props.onClose} improvement={props.improvement} /> */}
// {props.improvement.type} {props.improvement.level}{props.improvement.resourceProduced.amount}{props.improvement.cost.map(newCost => props.improvement.cost)}