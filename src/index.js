// load and parse your json file
// then, tell me the next id value

const items = [
    { id: 2, name: 'first' },
    { id: 1, name: 'second' },
    { id: 3, name: 'second' },
    { id: 5, name: 'second' },
    { id: 4, name: 'second' },
];

const itemIds = items.map(item => item.id);

const nextId = itemIds.reduce((prevValue, currentValue) => {
    console.log('prev', prevValue, 'current', currentValue);
    return Math.max(prevValue, currentValue);
}, 0) + 1;

console.log(nextId);