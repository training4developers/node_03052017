import fs from 'fs';
import path from 'path';

const dataFilePath = path.join('src', 'data.json');

export const readData = () => {
    return new Promise(resolve => {
        fs.readFile(dataFilePath, 'utf8', (err, rawData) => {
            resolve(JSON.parse(rawData));
        });
    });
};

export const writeData = (data) => {
    return new Promise(resolve => {
        fs.writeFile(dataFilePath, JSON.stringify(data, null, '\t'), 'utf8', () => {
            resolve();
        });
    });
};

export const getNextId = (data) => {
    const u = data.map(item => item.id).reduce((prev, current) =>
    Math.max(prev,current || 0), 0) + 1;
    console.log(u);
    return u;
};

export const findById = (data, itemId) => {
    return data.find(item => Number(item.id) === Number(itemId));
};
