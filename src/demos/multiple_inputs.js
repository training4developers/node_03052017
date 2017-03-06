import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = {};

const askQuestion1 = () => new Promise(resolve => {
    rl.question('Name? ', answer => {
        data.name = answer;
        resolve();
    });
});

const askQuestion2 = () => new Promise(resolve => {
    rl.question('Color? ', answer => {
        data.color = answer;
        resolve();
    });
});

const askQuestion3 = () => new Promise(resolve => {
    rl.question('Size? ', answer => {
        data.size = answer;
        resolve();
    });
});

askQuestion1()
    .then(() => askQuestion2())
    .then(() => askQuestion3())
    .then(() => {
        console.log(data);
        rl.close();
    });
