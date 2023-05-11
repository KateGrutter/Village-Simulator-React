import { Map } from "../Map";
import { useState } from "react";
import { Improvement } from "../../../models/Improvement";


export function EditImprovementDialog() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">
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
        </div>
    );
}