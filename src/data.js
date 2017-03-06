import fs from 'fs';

let shouldFail = false;

export const getFile = (filePath) => {

    return new Promise(resolve => {

        fs.readFile(filePath, 'utf8', (err, data) => {
            resolve(data);
        });

    });

};

export const putFile = (filePath, fileContents) => {

    return new Promise((resolve, reject) => {

        fs.writeFile(filePath, fileContents, 'utf8', (err, data) => {

            if (shouldFail) {
                reject();
            } else {
                resolve();
            }

            shouldFail = !shouldFail;
        });

    });

};