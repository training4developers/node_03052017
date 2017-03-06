import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter Command> ',
});

const rawData = fs.readFileSync(process.argv[2], 'utf8');
const data = JSON.parse(rawData);
let newData = {};

const getNextId = () => 
    data.map(item => item.id)
        .reduce((p, c) => Math.max(p, c), 0) + 1;

const list = () => {
    console.log(data);
};

const askQuestion = (question, objToUpdate, propName) => {
    return new Promise(resolve => {    
        rl.question(question, answer => {
            objToUpdate[propName] = answer;
            resolve();
        });
    });

};

const add = () => {
    return askQuestion('What is the name? ', newData, 'name')
        .then(() => askQuestion('What is the color? ', newData, 'color'))
        .then(() => askQuestion('What is the size? ', newData, 'size'))
        .then(() => {
    
            newData.id = getNextId();
            data.push(newData);
            newData = {};

            return new Promise(resolve => {
                fs.writeFile(process.argv[2],
                    JSON.stringify(data, null, '\t'), 'utf8', () => {
                        resolve();
                    });
            });

        });
};

const exit = () => {
    rl.close();
};

const processCommand = command => {

    switch(command) {
        case 'list':
            list();
            rl.prompt();
            break;
        case 'add':
            add().then(() => { rl.prompt(); });
            break;
        case 'exit':
            exit();
            break;
        default:
            console.log('invalid command');
            rl.prompt();
    }
};

rl.prompt();
rl.on('line', line => {
    processCommand(line);
}).on('close', () => {
    process.exit();
});
