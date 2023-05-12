import { House, Field, Pasture, LumberMill, Well } from "../store/ImprovementsCost"


import React, { useState } from 'react';
import { Improvement } from "../models/Improvement";
import { Resource } from "../models/Resource";

interface StockUpdateProps {
    improvements: Improvement[];
    resources: Resource[];
    onStockUpdate: (newResources: Resource[]) => void;
}

export const StockUpdate: React.FC<StockUpdateProps> = ({
    improvements,
    resources,
    onStockUpdate,
}) => {
    const handleImprovementPlacement = (improvement: Improvement) => {
        const { cost, resourceProduced } = improvement;

        // Check if the costs can be met by the stock of resources

        for (const requiredResource of cost) {
            const availableResource = resources.find(
                (resource) => resource.type === requiredResource.type
            );

            if (!availableResource || availableResource.amount < requiredResource.amount) {
                // Costs cannot be met, return or show an error message
                return;
            }
        }

        // Deduct the costs from the stock of resources
        const updatedResources = resources.map((resource) => {
            const requiredResource = cost.find(
                (costResource) => costResource.type === resource.type
            );

            if (requiredResource) {
                const updatedAmount = resource.amount - requiredResource.amount;
                return { ...resource, amount: updatedAmount };
            }

            return resource;
        });

        // Add the produced resource to the stock of resources
        const existingProducedResource = resources.find(
            (resource) => resource.type === resourceProduced.type
        );

        if (existingProducedResource) {
            const updatedAmount = existingProducedResource.amount + resourceProduced.amount;
            const updatedResources = resources.map((resource) => {
                if (resource.type === resourceProduced.type) {
                    return { ...resource, amount: updatedAmount };
                }
                return resource;
            });

            onStockUpdate(updatedResources);
        } else {
            const newResources = [...resources, resourceProduced];
            onStockUpdate(newResources);
        }
    };

    // Rest of the component code

    //     return (
    //         <div>Stock Update Component < /div>;
    //   )
};