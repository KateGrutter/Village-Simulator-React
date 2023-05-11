import { useState } from "react";
import { Improvement } from "../../../models/Improvement";


export function AddImprovementDialog() {
    return (
        <div>
            <form>
                <button>Close</button>
                <button>Upgrade</button>
                <button>Downgrade</button>
                <button>Remove</button>
            </form>
        </div>
    )
}