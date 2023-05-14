import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { ImprovementCosts } from "../../../store/ImprovementsCost";
import { TileData } from "../../../models/Tile";
import { Tile } from "./Tile";

interface AddImprovementDialogProps {
  onClose: (improvement?: Improvement) => void;
  onAdd: (improvement: Improvement, index: number) => void;
  index: number; // Add the index property
}

export function AddImprovementDialog(props: AddImprovementDialogProps) {
  const [selectedImprovement, setSelectedImprovement] = useState<Improvement | undefined>(undefined);

  const handleCancel = () => {
    setSelectedImprovement(undefined);
    props.onClose();
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedImprovement) {
      props.onAdd(selectedImprovement, props.index);
    }
    setSelectedImprovement(undefined);
    props.onClose();
  };

  return (
    <div className="add-improvement-dialog">

      <form onSubmit={handleAdd}>
        <select
          onChange={(e) =>
            setSelectedImprovement(
              ImprovementCosts.find(
                (improvement) => e.target.value === improvement.type
              )
            )
          }
        >
          <option disabled selected>
            Please select a type
          </option>
          {ImprovementCosts.map((improvement) => (
            <option key={improvement.type} value={improvement.type}>
              {improvement.type}
            </option>
          ))}
        </select>
        <div>
          Benefit{" "}
          {selectedImprovement ? selectedImprovement.resourceProduced.amount : ""}{" "}
          {selectedImprovement ? selectedImprovement.resourceProduced.type : ""}{" "}
        </div>
        <div>
          Cost{" "}
          {selectedImprovement?.cost.map((cost, index) => (
            <li key={index}>
              {cost.amount} {cost.type}
            </li>
          ))}
        </div>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
