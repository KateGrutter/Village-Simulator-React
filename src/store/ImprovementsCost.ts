import { Improvement } from "../models/Improvement"
import peopleIcon from '../assets/images/people.png'
import fieldIcon from '../assets/images/field.png'
import lumberIcon from '../assets/images/lumberMill.png' 
import sheepIcon from '../assets/images/sheep.png'
import wellIcon from '../assets/images/well.png'


export const ImprovementCosts: Improvement[] = [
    {
      type: 'House',
      level: 1,
      icon: peopleIcon,
      resourceProduced: {
        type: 'People',
        amount: 5,
      },
      cost: [
        {
          type: 'Lumber',
          amount: 5,
        },
        {
          type: 'Grain',
          amount: 5,
        },
        {
          type: 'Water',
          amount: 5,
        },
        {
          type: 'Sheep',
          amount: 1,
        },
      ],
    },
    {
      type: 'Field',
      level: 1,
      icon: fieldIcon,
      resourceProduced: {
        type: 'Grain',
        amount: 5,
      },
      cost: [
        {
          type: 'People',
          amount: 1,
        },
        {
          type: 'Water',
          amount: 2,
        },
      ],
    },
    {
      type: 'Pasture',
      level: 1,
      icon: sheepIcon,
      resourceProduced: {
        type: 'Sheep',
        amount: 5,
      },
      cost: [
        {
          type: 'People',
          amount: 1,
        },
        {
          type: 'Grain',
          amount: 2,
        },
        {
          type: 'Water',
          amount: 2,
        },
      ],
    },
    {
      type: 'Lumber Mill',
      level: 1,
      icon: lumberIcon,
      resourceProduced: {
        type: 'Lumber',
        amount: 10,
      },
      cost: [
        {
          type: 'People',
          amount: 1,
        },
      ],
    },
    {
      type: 'Well',
      level: 1,
      icon: wellIcon,
      resourceProduced: {
        type: 'Water',
        amount: 10,
      },
      cost: [
        {
          type: 'People',
          amount: 1,
        },
        {
          type: 'Lumber',
          amount: 2,
        },
      ],
    },
  ];
// export const Field: Improvement = {
//     type: 'Field',
//     level: 1,
//     resourceProduced: {
//         type: 'Grain',
//         amount: +5
//     },
//     cost: [{
//         type: 'People',
//         amount: -1
//     },
//     {
//         type: 'Water',
//         amount: -2
//     }]
// }

// export const Pasture: Improvement = {
//     type: 'Pasture',
//     level: 1,
//     resourceProduced: {
//         type: 'Sheep',
//         amount: +5
//     },
//     cost: [{
//         type: 'People',
//         amount: -1
//     },
//     {
//         type: 'Grain',
//         amount: -2
//     },
//     {
//         type: 'Water',
//         amount: -2
//     }
//     ]
// }

// export const LumberMill: Improvement = {
//     type: 'Lumber Mill',
//     level: 1,
//     resourceProduced: {
//         type: 'Lumber',
//         amount: +10
//     },
//     cost: [{
//         type: 'People',
//         amount: -1
//     }]
// }

// export const Well: Improvement = {
//     type: 'Well',
//     level: 1,
//     resourceProduced: {
//         type: 'Water',
//         amount: +10
//     },
//     cost: [{
//         type: 'Person',
//         amount: -1
//     },
//     {
//         type: 'Lumber',
//         amount: -2
//     }]
// }