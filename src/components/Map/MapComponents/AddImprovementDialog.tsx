import { useState } from "react";
import { Improvement } from "../../../models/Improvement";

 interface AddImprovementDialogProps {
  onClose: () => void;
  onAddImprovement: (newImprovement: Improvement) => void;
  selectedTileIndex: number;
}

export function AddImprovementDialog({ onClose, onAddImprovement, selectedTileIndex }: AddImprovementDialogProps) {
  const [open, setOpen] = useState(false);
  const [selectedImprovement, setSelectedImprovement] = useState('');

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleItemClick = (improvementType: string) => {
    setSelectedImprovement(improvementType);
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newImprovement: Improvement = {
      type: selectedImprovement,
      level: 1,
      resourceProduced: {
        type: selectedImprovement,
        amount: 1
        },
        cost: [
            {
                type: selectedImprovement,
                amount: 1
            }
        ]
      // Add other properties as needed
    };

    onAddImprovement(newImprovement);
    onClose();
  };

  return (
    <div className="dropdown">
      <form onSubmit={handleSubmit}>
        <button onClick={handleOpen}>Dropdown</button>
        {open && (
          <ul className="menu">
            <li className="menu-item">
              <button onClick={() => handleItemClick("People")}>People</button>
            </li>
            <li className="menu-item">
              <button onClick={() => handleItemClick("Grain")}>Grain</button>
            </li>
            <li className="menu-item">
              <button onClick={() => handleItemClick("Sheep")}>Sheep</button>
            </li>
            <li className="menu-item">
              <button onClick={() => handleItemClick("Lumber")}>Lumber</button>
            </li>
            <li className="menu-item">
              <button onClick={() => handleItemClick("Water")}>Water</button>
            </li>
          </ul>
        )}

        <button onClick={onClose}>Cancel</button>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}












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