import { useState } from "react";
import { Improvement } from "../../../models/Improvement";
import { House, ImprovementCosts } from "../../../store/ImprovementsCost";


//  interface AddImprovementDialogProps {
//   onClose: () => void;
//   onAddImprovement: (newImprovement: Improvement) => void;
//   selectedTileIndex: number;
// }

//add selectedTileIndex back callback props when ready ( directly down below)
// do we want to also call the interface : AddImprovementDialogProps?

export function AddImprovementDialog(props: { improvement: Improvement, onClose: (improvement: Improvement) => void, onAddImprovement: (improvement: Improvement) => void }) {
  const [open, setOpen] = useState(false); //drop down menu useState

  const [selectedImprovement, setSelectedImprovement] = useState(''); //sets improvement chosen from dropdown menu

  const [type, setType] = useState('House')

  const handleOpen = () => {
    setOpen(!open);
  }; //opens drop down menu

  //displays improvement type in form

  const displayType = (ImprovementCosts.type) => {
    { ImprovementCosts.map(Imp) }
  }

  function getStats() {
    return(
      switch(? type === 'House') {
        return 
      }
    ) 
  }

  // const handleItemClick = (improvementType: string) => {
  //   setSelectedImprovement(improvementType);
  //   setOpen(false);
  // }; //handles tiles

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const newImprovement: Improvement = {
  //     type: selectedImprovement,
  //     level: 1,
  //     resourceProduced: {
  //       type: selectedImprovement,
  //       amount: 1
  //     },
  //     cost: [
  //       {
  //         type: selectedImprovement,
  //         amount: 1
  //       }
  //     ]
  //     // Add other properties as needed
  //   };

  //   onAddImprovement(newImprovement);
  //   onClose();
  // };


  //when drop down clicked brings list of improvements
  //when specific item clicked it brings up type, benefit (resourceProduced), and cost (cost)
  //find() and STORE in variable, ex const House = Improvementcosts.find()
  //?
  return (
    <div className="dropdown">
      <form onSubmit={handleSubmit}>
        <button onClick={handleOpen}>Improvement Type</button>
        {open && (
          <ul className="menu">
            <li className="menu-item">
              <button onClick={() => setType("House")}>House</button>
            </li>
            <li className="menu-item">
              <button onClick={() => setType("Field")}>Field</button>
            </li>
            <li className="menu-item">
              <button onClick={() => setType("Pasture")}>Pasture</button>
            </li>
            <li className="menu-item">
              <button onClick={() => setType("Lumber Mill")}>Lumber Mill</button>
            </li>
            <li className="menu-item">
              <button onClick={() => setType("Well")}>Well</button>
            </li>
          </ul>
        ) : null}
        {open ? <div>Is Open</div> : <div>Is Closed</div>}
        <div>Benefit className={}</div>
        <div>Cost {}</div>
        <button>Cancel</button>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}











/*import { Map } from "../Map";
import { useState } from "react";
import { Improvement } from "../../../models/Improvement";


export function AddImprovementDialog() {

    // props: { onAddImprovement: (newImprovement: Improvement) => void }
    const [open, setOpen] = useState(false);

    const [people, setPeople] = useState('');
    const [grain, setGrain] = useState('');
    const [sheep, setSheep] = useState('');
    const [lumber, setLumber] = useState('');
    const [water, setWater] = useState('');

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="dropdown">

            <form onSubmit={e => {
                e.preventDefault();

                // const newImprovement: Improvement = {
                //     type: type,
                //     level: +level,
                //     benefit: benefit,
                //     cost: cost
                // }

                // props.onAddImprovement(newImprovement);
            }}>

                <button onClick={handleOpen}>Dropdown</button>
                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button>People</button>
                        </li>
                        <li className="menu-item">
                            <button>Grain</button>
                        </li>
                        <li className="menu-item">
                            <button>Sheep</button>
                        </li>
                        <li className="menu-item">
                            <button>Lumber</button>
                        </li>
                        <li className="menu-item">
                            <button>Water</button>
                        </li>

                    </ul>
                ) : null}

                <button>Cancel</button>
                <button>Add</button>
            </form>
        </div>
    );
}*/