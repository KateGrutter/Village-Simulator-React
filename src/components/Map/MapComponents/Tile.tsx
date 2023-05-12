import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { EditImprovementDialog } from "./EditImprovementDialog";


export function Tile(props: {improvement: Improvement, onClose: (improvement: Improvement) => void, onUpgrade: (improvement: Improvement) => void, onDowngrade: (improvement: Improvement) => void, onRemove: (improvement: Improvement) => void}) {
    return (
        <div>
            <EditImprovementDialog improvement={props.improvement} onUpgrade={props.onUpgrade} onDowngrade={props.onDowngrade} onClose={props.onClose} onRemove={props.onRemove}></EditImprovementDialog>
        </div>
    )
}

// {props.improvement.type} {props.improvement.level}{props.improvement.resourceProduced.amount}{props.improvement.cost.map(newCost => props.improvement.cost)}