import path from 'path';
import fs from 'fs';
import readline from 'readline';

// initial loading of data synchronously
const dataFile = path.join('src', process.argv[2]);

const rawData = fs.readFileSync(dataFile, 'utf8');
const data = JSON.parse(rawData);

const getNextId = () => {
    const u = data.map(item => item.id).reduce((prev, current) =>
    Math.max(prev,current || 0), 0) + 1;
    console.log(u);
    return u;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter Command> ',
});

const addItem = () => {

    let newData = {};

    const askQuestion1 = () => new Promise(resolve => {
        rl.question('Name? ', answer => {
            newData.name = answer;
            resolve();
        });
    });

    const askQuestion2 = () => new Promise(resolve => {
        rl.question('Color? ', answer => {
            newData.color = answer;
            resolve();
        });
    });

    const askQuestion3 = () => new Promise(resolve => {
        rl.question('Size? ', answer => {
            newData.size = answer;
            resolve();
        });
    });

    return askQuestion1()
        .then(() => askQuestion2())
        .then(() => askQuestion3())
        .then(() => {
            return newData;
        });    

};

const handleCommand = (command) => {

    return new Promise(resolve => {

        switch (command) {
            case 'list':
                process.stdout.write(JSON.stringify(data) + '\n');
                resolve();
                break;
            case 'add':
                addItem().then(newData => {
                    newData.id = getNextId();
                    data.push(newData);
                    fs.writeFile(dataFile,
                        JSON.stringify(data, null, '\t'), { encoding: 'utf8' }, () => {
                            resolve();
                        });
                });
                break;
            case 'exit':
                rl.close();
                break;
            default:
                process.stdout.write('Unknown command, try again.');
                resolve();
        }
    });

        
};

rl.prompt();

// handle operations asynchronously
rl.on('line', command => {

    handleCommand(command).then(() => {
        rl.prompt();
    });

}).on('close', () => {

    process.exit();

});