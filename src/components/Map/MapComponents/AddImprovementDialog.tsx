import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { ImprovementCosts } from "../../../store/ImprovementsCost";
import { TileData } from "../../../models/Tile";
import { Tile } from "./Tile";
import '../Map.css';

interface AddImprovementDialogProps {
  onClose: (improvement?: Improvement) => void;
  onAdd: (improvement: Improvement, index: number) => void;
  rowIndex: number;
  tileIndex: number;
  index: number;
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
        <select className="item"
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
        <div className="improvement-info">
          <div className="benefit">
            <h3>Benefit:</h3>
            <p className="add-p">{" "}</p>
            {selectedImprovement ? selectedImprovement.resourceProduced?.amount : ""}{" "}
            {selectedImprovement ? selectedImprovement.resourceProduced?.type : ""}{" "}
          </div>
          <div className="cost">
            <h3>Cost:</h3>
            <p className="add-p">{" "}</p>
            {selectedImprovement?.cost.map((cost, index) => (
              <li className="add-p" key={index}>
                {cost.amount} {cost.type}
              </li>
            ))}
          </div>
        </div>

        <button className="button" type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="button" type="submit">Add</button>
      </form>
    </div>
  );
}
