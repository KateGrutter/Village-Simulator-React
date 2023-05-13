import './ResourceView.css';
import { Improvement } from '../../models/Improvement';
import { useState } from 'react'
import { ResourceLine } from './ResourceComponents/ResourceLine';

export function ResourceView() {

  return (
    <div>
      <table>
        <tr>
          <th>Resource</th>
          <th>Available</th>
        </tr>
        {/* {
          resources.map(resource =>
            <tr>
              <td><ResourceLine resources={resource}></ResourceLine></td>
            </tr>)
        } */}

      </table>
    </div>
  )
}









/*export function ResourceView() {
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
            <thead>
              <tr>
                <th>Resource</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              {resources.map(resource => (
                <tr key={resource.type}>
                  <td>
                    <ResourceLine resources={resource} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  /*  return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Resource</th>
                    <th>Available</th>
                </tr>
                </thead>
                <tBody>
                {
                    resources.map(resource =>(
                        <tr key={resource.type}>
                            <td>
                                <ResourceLine resources={resource}></ResourceLine>
                                </td>
                        </tr>)
                )}
                </tBody>
            </table>
        </div>
    )
}
*/