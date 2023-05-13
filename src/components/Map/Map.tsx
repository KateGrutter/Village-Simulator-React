import { useState } from "react";
import { Improvement } from "../../archive/Improvement";
import "./Map.css";
import { MapProps } from "./MapComponents/MapProps";
import { AddImprovementDialog } from "./MapComponents/AddImprovementDialog";
import { House } from "../../store/ImprovementsCost";
import { Tile } from "./MapComponents/Tile";

export function Map() {
  <div>
    <div className="board-row">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
    <div className="board-row">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
    <div className="board-row">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
    <div className="board-row">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
    <div className="board-row">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  </div>;
}

// export function Map({ onTileClick }: MapProps) {
//   const [improvements, setImprovements] = useState<Improvement[][]>([]);
//   const [showAddImprovementDialog, setShowAddImprovementDialog] = useState(false);
//   const [selectedTileIndex, setSelectedTileIndex] = useState<number | null>(null);

//   const handleTileClick = (tileIndex: number) => {
//     setSelectedTileIndex(tileIndex);
//     setShowAddImprovementDialog(true);
//   };

//   const addImprovement = (newImprovement: Improvement) => {
//     const updatedImprovements = [...improvements];
//     if (selectedTileIndex !== null) {
//       if (!updatedImprovements[selectedTileIndex]) {
//         updatedImprovements[selectedTileIndex] = [];
//       }
//       updatedImprovements[selectedTileIndex].push(newImprovement);
//       setImprovements(updatedImprovements);
//     }
//   };

//   return (
//     <div>
//       <div className="gameboard">
//       <div className="tile" onClick={() => onTileClick(0)}>
//             {improvements[0] && <ImprovementComponent key ={0} improvement={improvements[0]} />}</div>
//             <div className="tile" onClick={() => onTileClick(1)}>
//             {improvements[0] && <ImprovementComponent key ={1} improvement={improvements[0]} />}</div>
//             <div className="tile" onClick={() => onTileClick(2)}>
//             {improvements[0] && <ImprovementComponent key ={2} improvement={improvements[0]} />}</div>
//             <div className="tile" onClick={() => onTileClick(3)}>
//             {improvements[0] && <ImprovementComponent key ={0} improvement={improvements[0]} />}</div>
//             <div className="tile" onClick={() => onTileClick(4)}>
//             {improvements[0] && <ImprovementComponent key ={4} improvement={improvements[0]} />}</div>
//       </div>

//       {showAddImprovementDialog && (
//         <AddImprovementDialog
//           onClose={() => setShowAddImprovementDialog(false)}
//           onAddImprovement={addImprovement}
//           selectedTileIndex={selectedTileIndex !== null ? selectedTileIndex : 0}
//           // Other props you may need to pass
//         />
//       )}
//     </div>
//   );
// }

// interface ImprovementComponentProps {
//   improvement: Improvement;
// }

// function ImprovementComponent({ improvement }: ImprovementComponentProps) {
//   // Render the improvement component based on the provided improvement object
//   return <div>{/* Improvement component JSX */}</div>;
// }

/*
import { useState } from "react";
import { Improvement } from "../../models/Improvement";
import "./Map.css";
import { MapProps } from "./MapComponents/MapProps";
import { AddImprovementDialog } from "./MapComponents/AddImprovementDialog";


export function Map({ onTileClick }: MapProps) {
  const [improvement, setImprovements] = useState<Improvement[][]>([]);
  const [showAddImprovementDialog, setShowAddImprovementDialog] = useState(false);
  const [selectedTileIndex, setSelectedTileIndex] = useState<number | null>(null);

  const handleTileClick = (tileIndex: number) => {
    setSelectedTileIndex(tileIndex);
    setShowAddImprovementDialog(true);
  };

  const addImprovement = (newImprovement: Improvement) => {
    const updatedImprovements = [...improvement];
    if (!updatedImprovements[selectedTileIndex]) {
      updatedImprovements[selectedTileIndex] = [];
    }
    updatedImprovements[selectedTileIndex].push(newImprovement);
    setImprovements(updatedImprovements);
  };



  return (
    <div>
      <div className="gameboard">
        <div className="gameboard-row" data-row="1" id="row-1">
          <div className="tile" onClick={() => onTileClick(0)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(1)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(2)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(3)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(4)}>
            {improvement[0] && <ImprovementComponent key ={4} improvement={improvement[0]} />}</div>
        </div>

        <div className="gameboard-row" data-row="2" id="row-2">
        <div className="tile" onClick={() => onTileClick(5)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(6)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(7)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(8)}>
            {improvement[0] && <ImprovementComponent key ={3} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(9)}>
            {improvement[0] && <ImprovementComponent key ={4} improvement={improvement[0]} />}</div>
        </div>
        <div className="gameboard-row" data-row="3" id="row-3">
        <div className="tile" onClick={() => onTileClick(10)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(11)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(12)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(13)}>
            {improvement[0] && <ImprovementComponent key ={3} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(14)}>
            {improvement[0] && <ImprovementComponent key ={4} improvement={improvement[0]} />}</div>
        </div>
        <div className="gameboard-row" data-row="4" id="row-4">
        <div className="tile" onClick={() => onTileClick(15)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(16)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(17)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(18)}>
            {improvement[0] && <ImprovementComponent key ={3} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(19)}>
            {improvement[0] && <ImprovementComponent key ={4} improvement={improvement[0]} />}</div>
        </div>
        <div className="gameboard-row" data-row="5" id="row-5">
        <div className="tile" onClick={() => onTileClick(20)}>
            {improvement[0] && <ImprovementComponent key ={0} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(21)}>
            {improvement[0] && <ImprovementComponent key ={1} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(22)}>
            {improvement[0] && <ImprovementComponent key ={2} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(23)}>
            {improvement[0] && <ImprovementComponent key ={3} improvement={improvement[0]} />}</div>
            <div className="tile" onClick={() => onTileClick(24)}>
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
  return <div>{/* Improvement component JSX */
// } ;*/
