import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { EditImprovementDialog } from "./EditImprovementDialog";
import { AddImprovementDialog } from "./AddImprovementDialog";


export function Tile(props: {value: number, onTileClick:() => void}) {
    return (
        <div className="tile">
            
        </div>
    )
}
// props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onUpgrade: (improvement: Improvement) => void, onDowngrade: (improvement: Improvement) => void, onRemove: (improvement: Improvement) => void, onAdd: (improvement: Improvement) => void }
{/* <EditImprovementDialog improvement={props.improvement} onUpgrade={props.onUpgrade} onDowngrade={props.onDowngrade} onClose={props.onClose} onRemove={props.onRemove}></EditImprovementDialog>
            <AddImprovementDialog onAdd={props.onAdd} onClose={props.onClose} improvement={props.improvement} /> */}
// {props.improvement.type} {props.improvement.level}{props.improvement.resourceProduced.amount}{props.improvement.cost.map(newCost => props.improvement.cost)}