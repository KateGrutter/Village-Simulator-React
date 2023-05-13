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
          name="cars"
          id="cars"
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
// {selectedImprovement.cost.map( cost => cost.amount )}

//cost items: selectedImprovement.cost.map to show cost
//cost.amount cost.type

/*import { Map } from "../Map";
import { useState } from "react";
import { Improvement } from "../../../models/Improvement";


export function AddImprovementDialog() {

    // props: { onAddImprovement: (newImprovement: Improvement) => void }
    const [open, setOpen] = useState(false);

    const [people, setPeople] = useState('');
    const [grain, setGrain] = useState('');
    const [sheep, setSheep] = useState('');
    const [lumber, setLumber] = useState('');
    const [water, setWater] = useState('');

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">

            <form onSubmit={e => {
                e.preventDefault();

                // const newImprovement: Improvement = {
                //     type: type,
                //     level: +level,
                //     benefit: benefit,
                //     cost: cost
                // }

                // props.onAddImprovement(newImprovement);
            }}>

                <button onClick={handleOpen}>Dropdown</button>
                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button>People</button>
                        </li>
                        <li className="menu-item">
                            <button>Grain</button>
                        </li>
                        <li className="menu-item">
                            <button>Sheep</button>
                        </li>
                        <li className="menu-item">
                            <button>Lumber</button>
                        </li>
                        <li className="menu-item">
                            <button>Water</button>
                        </li>

                    </ul>
                ) : null}

                <button>Cancel</button>
                <button>Add</button>
            </form>
        </div>
    );
}*/
