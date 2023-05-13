import { Improvement } from "../../../models/Improvement"

export function ResourceLine(props: { resources: Resource }) {

    return (
        <div>

            <td>{props.resources.icon}{props.resources.type}</td>
            <td>{props.resources.amount}</td>
        </div>
    )
}