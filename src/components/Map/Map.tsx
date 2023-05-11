











import { useState } from "react";
import { Improvement } from "../../models/Improvement";
import "./Map.css";
import { MapProps } from "./MapComponents/MapProps";



export function Map({onTileClick}: MapProps) {

  const [improvement, setImprovement] = useState<Improvement[]>([]);

  const handleTileClick = (tileIndex: number) => {
    console.log("Tile clicked:", tileIndex);
    onTileClick(tileIndex);
  };

  return (
    <div>
      <div className="gameboard">
        <div className="gameboard-row" data-row="1" id="row-1">
          <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={3} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={4} improvement={improvement[0]} />}</div>
        </div>

        <div className="gameboard-row" data-row="2" id="row-2">
        <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={3} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={4} improvement={improvement[0]} />}</div>
        </div>
        <div className="gameboard-row" data-row="3" id="row-3">
        <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={3} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={4} improvement={improvement[0]} />}</div>
        </div>
        <div className="gameboard-row" data-row="4" id="row-4">
        <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={3} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={4} improvement={improvement[0]} />}</div>
        </div>
        <div className="gameboard-row" data-row="5" id="row-5">
        <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={3} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={4} improvement={improvement[0]} />}</div>
        </div>
      </div>
    </div>
  );
}


interface ImprovementComponentProps {
  improvement: Improvement;
}

function ImprovementComponent({ improvement }: ImprovementComponentProps) {
  // Render the improvement component based on the provided improvement object
  return <div>{/* Improvement component JSX */}</div>;
} ;