import { Improvement } from "../models/Improvement";

export const House: Improvement = {
    type: 'House', //improvement
    level: 1,
    resourceProduced: {
        type: 'People',
        amount: +5
    }, //may be referred to as benefit
    cost: [{
        type: 'Lumber',
        amount: -5
    },
    {
        type: 'Grain',
        amount: -5
    },
    {
        type: 'Water',
        amount: -5
    },
    {
        type: 'Sheep',
        amount: -1
    }]
}

export const Field: Improvement = {
    type: 'Field', //improvement
    level: 1,
    resourceProduced: {
        type: 'Grain',
        amount: +5
    }, //may be referred to as benefit
    cost: [{
        type: 'People',
        amount: -1
    },
    {
        type: 'Water',
        amount: -2
    }]
}

export const Pasture: Improvement = {
    type: 'Pasture', //improvement
    level: 1,
    resourceProduced: {
        type: 'Sheep',
        amount: +5
    }, //may be referred to as benefit
    cost: [{
        type: 'People',
        amount: -1
    },
    {
        type: 'Grain',
        amount: -2
    },
    {
        type: 'Water',
        amount: -2
    }
    ]
}

export const LumberMill: Improvement = {
    type: 'Lumber Mill', //improvement
    level: 1,
    resourceProduced: {
        type: 'Lumber',
        amount: +10
    }, 
    cost: [{
        type: 'People',
        amount: -1
    }]
}

export const Well: Improvement = {
    type: 'Well', //improvement
    level: 1,
    resourceProduced: {
        type: 'Water',
        amount: +10
    }, //may be referred to as benefit
    cost: [{
        type: 'Person',
        amount: -1
    },
    {
        type: 'Lumber',
        amount: -2
    }]
}