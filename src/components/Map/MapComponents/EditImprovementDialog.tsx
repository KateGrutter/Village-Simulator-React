import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { ImprovementCosts } from "../../../store/ImprovementsCost";


export function EditImprovementDialog(props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onUpgrade: (improvement: Improvement) => void, onDowngrade: (improvement: Improvement) => void, onRemove: (improvement: Improvement) => void }) {
    return (
        <div>
            <div className="improvement-info">
                <p>Type {props.improvement.type}</p>
                <p>Level {props.improvement.level}</p>
                <p>Benefit {props.improvement.resourceProduced?.amount} {props.improvement.resourceProduced?.type} </p>
                <div> Cost {
                    props.improvement.cost.map((cost, index) => (
                        <li key={index}>
                            {cost.amount} {cost.type}
                        </li>))}
                </div>
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
