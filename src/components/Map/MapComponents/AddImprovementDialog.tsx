import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { ImprovementCosts } from "../../../store/ImprovementsCost";

interface AddImprovementDialogProps {
  onClose: (improvement?: Improvement) => void;
  onAdd: (improvement: Improvement) => void;
  improvement: Improvement | undefined;
}

export function AddImprovementDialog(props: AddImprovementDialogProps) {
  const [selectedImprovement, setSelectedImprovement] = useState<Improvement | undefined>(props.improvement);

  const handleCancel = () => {
    setSelectedImprovement(undefined);
    props.onClose();
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedImprovement) {
      props.onAdd(selectedImprovement);
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


//onClick={onAdd(selectedImprovement)} <-----SUBMIT BUTTON IDEAS
