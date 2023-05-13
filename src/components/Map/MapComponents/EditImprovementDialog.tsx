import { useState } from "react";
import { Improvement } from "../../../models/Improvement";


export function EditImprovementDialog(props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onUpgrade: (improvement: Improvement) => void, onDowngrade: (improvement: Improvement) => void, onRemove: (improvement: Improvement) => void }) {
    return (
        <div>
            <div className="improvement-info">
                <p>Type {props.improvement.type}</p>
                <p>Level {props.improvement.level}</p>
                <p>Benefit </p>
                <div> Cost {
                    props.improvement.cost.map(newImprovement => props.improvement.cost)}</div>
            </div>
            <div className="buttons-container">
                <button>Close</button>
                <button>Upgrade</button>
                <button>Downgrade</button>
                <button>Remove</button>
            </div>
        </div>
    )
}
