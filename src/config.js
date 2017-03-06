import { getFile } from './data';

export const getConfig = () => {

    return getFile('./src/config.json').then(data => JSON.parse(data));

};