import './ResourceView.css';
import { Improvement } from '../../models/Improvement';
import { useState } from 'react'
import { ResourceLine } from './ResourceComponents/ResourceLine';
import { Resource } from '../../models/Improvement';

import './ResourceView.css'



interface ResourceViewProps {
  resources: Resource[];
}

export function ResourceView(props: ResourceViewProps) {
  const { resources } = props;

  return (
    <div className="resourceKey">
      <table>
        <thead>
          <tr>
            <th>Resource</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {resources.map((resource: Resource) => (
            <tr key={resource.type}>
              <td>
                <ResourceLine resource={resource} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
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