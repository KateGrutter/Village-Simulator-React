import './ResourceView.css';
import { Resource } from '../../models/Resource';
import { useState } from 'react'
import { ResourceLine } from './ResourceComponents/ResourceLine';

export function ResourceView() {
    const [resources, setResources] = useState<Resource[]>([
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
        <div>
            <table>
          <tr>
            <th>Resource</th>
            <th>Available</th>
          </tr>
            {
                resources.map(resource => 
                    <tr>
                        <td><ResourceLine resources={resource}></ResourceLine></td>
                    </tr>)
            }

          </table>
        </div>
    )
}
