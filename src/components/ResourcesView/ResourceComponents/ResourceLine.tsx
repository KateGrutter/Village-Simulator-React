import { Resource } from "../../../models/Improvement"

export function ResourceLine(props: { resource: Resource }) {
    return (
      <div>
        <td>{props.resource.icon}{props.resource.type}</td>
        <td>{props.resource.amount}</td>
      </div>
    );
  }
  