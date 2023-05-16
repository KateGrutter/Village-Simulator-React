import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { ImprovementCosts } from "../../../store/ImprovementsCost";

export function EditImprovementDialog(props: {
    improvement: Improvement;
    onClose: () => void;
    onUpgrade: () => void;
    onDowngrade: () => void;
    onRemove: () => void;
  }) {
    const [level, setLevel] = useState(props.improvement.level); // State for the improvement level
    const [resourceAmount, setResourceAmount] = useState<number>(
      props.improvement.resourceProduced?.amount || 0
    ); // State for the resource amount produced by the improvement
  
    const upgradeImprovement = () => {
      setLevel(level + 1); // Increase the improvement level
      setResourceAmount(resourceAmount + (props.improvement.resourceProduced?.amount || 0)); // Add the resource amount to the total
      props.onUpgrade(); // Call the onUpgrade callback provided by the parent component
    };
  
    const downgradeImprovement = () => {
      if (level === 1) {
        return; // Cannot downgrade below level 1
      }
      const newLevel = level - 1; // Decrease the improvement level
      const newResourceAmount = resourceAmount - (props.improvement.resourceProduced?.amount || 0); // Subtract the resource amount from the total
      setLevel(newLevel);
      setResourceAmount(newResourceAmount);
      props.onDowngrade(); // Call the onDowngrade callback provided by the parent component
    };
    
    const removeImprovement = () => {
        props.onRemove(); // Call the onRemove callback provided by the parent component
      };
  
    return (
      <div>
        <div className="improvement-info">
          <p>Type: {props.improvement.type}</p>
          <p>Level: {level}</p>
          <p>
            Benefit: {resourceAmount} {props.improvement.resourceProduced?.type}
          </p>
          <div>
            Cost:
            {props.improvement.cost.map((cost, index) => (
              <li key={index}>
                {cost.amount} {cost.type}
              </li>
            ))}
          </div>
        </div>
        <div className="buttons-container">
          <button onClick={props.onClose}>Close</button>
          <button onClick={upgradeImprovement}>Upgrade</button>
          <button onClick={downgradeImprovement}>Downgrade</button>
          <button onClick={removeImprovement}>Remove</button>
        </div>
      </div>
    );
  }
  