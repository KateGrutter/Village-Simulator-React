import React, { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { AddImprovementDialog } from "./AddImprovementDialog";

type TileProps = {
    improvement: Improvement;
    onClose: (improvement: Improvement) => void;
    onUpgrade: (improvement: Improvement) => void;
    onDowngrade: (improvement: Improvement) => void;
    onRemove: (improvement: Improvement) => void;
    onAdd: (improvement: Improvement) => void;
  };
  
  const Tile: React.FC<TileProps> = ({
    improvement,
    onClose,
    onUpgrade,
    onDowngrade,
    onRemove,
    onAdd, 
  }) => {
    const handleClick = () => {
      onAdd(improvement);
    };
  
    return (
      <div className="tile" onClick={handleClick}>
        {}
      </div>
    );
  };
  
  export default Tile;

// props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onUpgrade: (improvement: Improvement) => void, onDowngrade: (improvement: Improvement) => void, onRemove: (improvement: Improvement) => void, onAdd: (improvement: Improvement) => void }
/* <EditImprovementDialog improvement={props.improvement} onUpgrade={props.onUpgrade} onDowngrade={props.onDowngrade} onClose={props.onClose} onRemove={props.onRemove}></EditImprovementDialog>
            <AddImprovementDialog onAdd={props.onAdd} onClose={props.onClose} improvement={props.improvement} /> */
// {props.improvement.type} {props.improvement.level}{props.improvement.resourceProduced.amount}{props.improvement.cost.map(newCost => props.improvement.cost)}