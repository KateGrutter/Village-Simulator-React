import { useState } from "react";
import { Improvement, Resource } from "../../../models/Improvement";
import { ImprovementCosts } from "../../../store/ImprovementsCost";
import '../Map.css'

export function EditImprovementDialog(props: {
  improvement: Improvement;
  resources: Resource[];
  setResources: any;
  onClose: () => void;
  onUpgrade: () => void;
  onDowngrade: () => void;
  onRemove: () => void;
}) {
  const [level, setLevel] = useState(props.improvement.level); // State for the improvement level
  const [resourceAmount, setResourceAmount] = useState<number>(
    props.improvement.resourceProduced?.amount || 0
  ); // State for the resource amount produced by the improvement

  const [upgradeDisabled, setUpgradeDisabled] = useState<boolean>(false);
  const [downgradeDisabled, setDowngradeDisabled] = useState<boolean>(false);

  const upgradeImprovement = () => {
    setUpgradeDisabled(false);
    const enoughResources = props.improvement.cost.every((cost) => {
      const matchingResource = props.resources.find(
        (resource) => resource.type === cost.type
      );
      return matchingResource && matchingResource.amount >= cost.amount;
    });

    if (!enoughResources) {
      setUpgradeDisabled(true);
      console.log('Not enough resources to upgrade improvement');
      return;
    }

    const updatedResources = props.resources.map((resource) => {
      const matchingCost = props.improvement.cost.find(
        (cost) => cost.type === resource.type
      );
      if (matchingCost) {
        return {
          ...resource,
          amount: resource.amount - matchingCost.amount,
        };
      }
      return resource;
    });

    setLevel((prevLevel) => prevLevel + 1)

    const addBenefit = props.improvement.resourceProduced?.amount || 0;

    const resourceMatch = updatedResources.find(
      (resource) => resource.type === props.improvement.resourceProduced?.type
    );

    if (resourceMatch) {
      const updatedResourceMatch = {
        ...resourceMatch,
        amount: resourceMatch.amount + addBenefit,
      };
      const updatedResourcesWithBenefit = updatedResources.map((resource) =>
        resource.type === props.improvement.resourceProduced?.type
          ? updatedResourceMatch
          : resource
      );
      props.setResources(updatedResourcesWithBenefit);
    } else {
      props.setResources(updatedResources);
    }

    props.onUpgrade();
  };

  const downgradeImprovement = () => {
    if (level === 1) {
      setDowngradeDisabled(true);
      return;
    }

    const enoughResources = props.improvement.cost.every((cost) => {
      const matchingResource = props.resources.find(
        (resource) => resource.type === cost.type
      );
      return matchingResource && matchingResource.amount >= cost.amount;
    });

    if (!enoughResources) {
      console.log('Not enough resources to upgrade improvement');
      return;
    }

    const updatedResources = props.resources.map((resource) => {
      const matchingCost = props.improvement.cost.find(
        (cost) => cost.type === resource.type
      );
      if (matchingCost) {
        return {
          ...resource,
          amount: resource.amount / matchingCost.amount,
        };
      }
      return resource;
    });

    setLevel((prevLevel) => prevLevel - 1);

    const removeBenefit = props.improvement.resourceProduced?.amount || 0;

    const resourceMatch = updatedResources.find(
      (resource) => resource.type === props.improvement.resourceProduced?.type
    );

    if (resourceMatch) {
      const updatedResourceMatch = {
        ...resourceMatch,
        amount: resourceMatch.amount - removeBenefit,
      };
      const updatedResourcesWithBenefit = updatedResources.map((resource) =>
        resource.type === props.improvement.resourceProduced?.type
          ? updatedResourceMatch
          : resource
      );
      props.setResources(updatedResourcesWithBenefit);
    } else {
      props.setResources(updatedResources);
    }

    props.onDowngrade();
  };


  const removeImprovement = () => {
    const matchingResource = props.improvement.resourceProduced?.type;

    const updatedResources = props.resources.map((resource) => {
      const matchingCost = props.improvement.cost.find(
        (cost) => cost.type === resource.type
      );
      if (matchingCost) {
        let amountChange = matchingCost.amount; // Initialize amountChange with the cost amount
        if (level > 1 && matchingResource) {
          const matchingBenefit = props.improvement.resourceProduced;
          if (matchingBenefit && matchingBenefit.type === matchingResource) {
            amountChange -= matchingBenefit.amount * (level - 1); // Subtract the benefit based on the improvement level
          }
        }
        return {
          ...resource,
          amount: resource.amount + amountChange, // Add the amountChange back
        };
      }
      return resource;
    });

    console.log('Updated Resources:', updatedResources);

    // Find the matching resource within removeImprovement
    const resourceMatch = updatedResources.find(
      (resource) => resource.type === matchingResource
    );

    console.log('Resource Match:', resourceMatch);

    if (resourceMatch) {
      let updatedResourcesWithBenefit = updatedResources;
      if (matchingResource) {
        updatedResourcesWithBenefit = updatedResources.map((resource) =>
          resource.type === matchingResource
            ? {
              ...resource,
              amount: Math.max(0, resource.amount - resourceMatch.amount),
            }
            : resource
        );
      }

      console.log('Updated Resources with Benefit Removed:', updatedResourcesWithBenefit);

      props.setResources(updatedResourcesWithBenefit);
    } else {
      props.setResources(updatedResources);
    }

    props.onRemove();
  };

  return (
    <div className="editImprovementDialog">
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
        <button className="button" onClick={props.onClose}>Close</button>
        <button className="button" onClick={upgradeImprovement} disabled={upgradeDisabled}>
          Upgrade
        </button>
        <button className="button" onClick={downgradeImprovement} disabled={downgradeDisabled}>
          Downgrade
        </button>
        <button className="button" onClick={removeImprovement}>Remove</button>
      </div>
    </div>

  );
}

