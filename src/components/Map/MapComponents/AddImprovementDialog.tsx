import { Map } from "../Map";
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
}