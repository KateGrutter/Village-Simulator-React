import './ResourceView.css';
import { Resource } from '../../models/Resource';
import { useState } from 'react'

export function ResourceView() {
    const [resource, setResource] = useState<Resource[]>([
        {
            type: "Lumber",
            amount: 5
        },
        {
            type: "Grain",
            amount: 5
        },
        {
            type: "Water",
            amount: 5
        },
        {
            type: "Sheep",
            amount: 1
        }
    ]);
    return (
        <div></div>
    )
}