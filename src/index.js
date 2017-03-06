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

const list = () => {
    console.log(data);
};

const add = () => {
    return new Promise(resolve => {
        resolve();
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
            add().then(() => {
                rl.prompt();
            });
            break;
        case 'exit':
            exit();
            break;
        default:
            console.log('invalid command');
            rl.prompt();
            break;
    }

};

rl.prompt();
rl.on('line', line => {

    processCommand(line);
    
}).on('close', () => {

    process.exit();
    
});
