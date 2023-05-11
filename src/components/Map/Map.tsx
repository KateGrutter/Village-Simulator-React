import { useState } from "react";
import { Improvement } from "../../models/Improvement";
import "./Map.css";

export function Map() {

    const [improvement, setImprovement] = useState<Improvement[]>([]);

  return (
    <div>
      <div className="gameboard">
        <div className="gameboard-row" data-row="1" id="row-1">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>

        <div className="gameboard-row" data-row="2" id="row-2">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="gameboard-row" data-row="3" id="row-3">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="gameboard-row" data-row="4" id="row-4">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
        <div className="gameboard-row" data-row="5" id="row-5">
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
        </div>
      </div>
    </div>
  );
}
