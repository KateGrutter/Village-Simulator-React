import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Map } from "./components/Map/Map"
import { ResourceView } from "./components/ResourcesView/ResourcesView";
import { Improvement } from "./models/Improvement";
import { ImprovementCosts } from "./store/ImprovementsCost";
import { Resource } from "./models/Improvement";

function App() {
  const [resources, setResources] = useState<Resource[]>([
    {
      type: "Lumber",
      amount: 5,
    },
    {
      type: "Grain",
      amount: 5,
    },
    {
      type: "Water",
      amount: 5,
    },
    {
      type: "Sheep",
      amount: 1,
    },
    {
      type: "People",
      amount: 0,
    }
  ]);

  function handleResourceUpdate(improvement: Improvement) {
    console.log('Resources2:', resources);
    setResources((prevResources) => {
      const updatedResources = [...prevResources];

      // Check if the cost can be met
      for (const costResource of improvement.cost) {
        const resourceIndex = updatedResources.findIndex(
          (resource) => resource.type === costResource.type
        );
        if (resourceIndex === -1 || updatedResources[resourceIndex].amount < costResource.amount) {
          console.log('Resources:', resources);
          console.log(`Matching resource:`, updatedResources[resourceIndex]);
          console.log(`Cost resource:`, costResource);
          console.log(`Can produce: false`);
          console.log(`Insufficient resources to produce improvement`);
          return prevResources; // Return the previous resources without updating
        }
      }

      // Deduct the cost from resources
      for (const costResource of improvement.cost) {
        const resourceIndex = updatedResources.findIndex(
          (resource) => resource.type === costResource.type
        );
        if (resourceIndex !== -1) {
          console.log(`Subtracting ${costResource.amount} ${costResource.type} from ${updatedResources[resourceIndex].amount}`);
          updatedResources[resourceIndex].amount += costResource.amount;
          console.log(`Updated amount: ${updatedResources[resourceIndex].amount}`);
        }
      }

      // Add the produced resource to resources
      if (improvement.resourceProduced) {
        const resourceIndex = updatedResources.findIndex(
          (resource) => resource.type === improvement.resourceProduced?.type
        );
        if (resourceIndex !== -1) {
          console.log(`Adding ${improvement.resourceProduced.amount} ${improvement.resourceProduced.type} to ${updatedResources[resourceIndex].amount}`);
          updatedResources[resourceIndex].amount += improvement.resourceProduced.amount;
          console.log(`Updated amount: ${updatedResources[resourceIndex].amount}`);
        } else {
          updatedResources.push(improvement.resourceProduced);
        }
      } else {
        console.log('No resource produced');
      }

      return updatedResources;
    });
  }

  return (
    <div className="App">
      <Map gridSize={5} handleResourceUpdate={handleResourceUpdate} resources={resources} setResources={setResources} /> {/* Updated prop name */}
      <ResourceView resources={resources} />
    </div>
  );
}

export default App;