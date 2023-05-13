import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { ImprovementCosts } from "../../../store/ImprovementsCost";


//  interface AddImprovementDialogProps {
//   onClose: () => void;
//   onAddImprovement: (newImprovement: Improvement) => void;
//   selectedTileIndex: number;
// }

//add selectedTileIndex back callback props when ready ( directly down below)
// do we want to also call the interface : AddImprovementDialogProps?

//(props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onAddImprovement: (improvement: Improvement) => void }

export function AddImprovementDialog(props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onAdd: (improvement: Improvement) => void }) {

  const [selectedImprovement, setSelectedImprovement] = useState<Improvement | undefined>(undefined); //sets improvement chosen from dropdown menu


  return (
    <div className="dropdown">
      <form>
        <select onChange={e => setSelectedImprovement(ImprovementCosts.find(improvement => e.target.value === improvement.type))} name="cars" id="cars">
          {ImprovementCosts.map(improvement => <option value={improvement.type}>{improvement.type}</option>)}
        </select>
        <div>Benefit {selectedImprovement ? selectedImprovement.resourceProduced.amount : ''} {selectedImprovement ? selectedImprovement.resourceProduced.type : ''} </div>
        <div>Cost {selectedImprovement?.cost.map((cost, index) => (
          <li key={index}>
            {cost.amount} {cost.type}
          </li>))}
        </div>
        <button>Cancel</button>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}


//onClick={onAdd(selectedImprovement)} <-----SUBMIT BUTTON IDEAS
// {selectedImprovement.cost.map( cost => cost.amount )}