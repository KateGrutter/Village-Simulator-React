import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { AddImprovementDialog } from "./AddImprovementDialog";
import { TileData } from "../../../models/Tile";




export function Tile(props: { value: TileData }) {
    const [selectedImprovement, setSelectedImprovement] = useState<Improvement | undefined>(props.value.improvement);
  
    const getImprovementIcon = () => {
      if (selectedImprovement && selectedImprovement.icon) {
        return selectedImprovement.icon;
      }
      return ""; // Default icon path or empty string if no icon is available
    };
  
    const handleSelectImprovement = (improvement: Improvement | undefined) => {
      setSelectedImprovement(improvement);
    };
  
    return (
      <div className="tile" onClick={() => handleSelectImprovement(props.value.improvement)}>
        {selectedImprovement ? (
          <>
            <img src={getImprovementIcon()} alt="Improvement Icon" />
            {selectedImprovement.type}
          </>
        ) : (
          "No Improvement"
        )}
      </div>
    );
  }
// props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onUpgrade: (improvement: Improvement) => void, onDowngrade: (improvement: Improvement) => void, onRemove: (improvement: Improvement) => void, onAdd: (improvement: Improvement) => void }
{/* <EditImprovementDialog improvement={props.improvement} onUpgrade={props.onUpgrade} onDowngrade={props.onDowngrade} onClose={props.onClose} onRemove={props.onRemove}></EditImprovementDialog>
            <AddImprovementDialog onAdd={props.onAdd} onClose={props.onClose} improvement={props.improvement} /> */}
// {props.improvement.type} {props.improvement.level}{props.improvement.resourceProduced.amount}{props.improvement.cost.map(newCost => props.improvement.cost)}