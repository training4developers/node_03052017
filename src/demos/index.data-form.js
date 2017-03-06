import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is the name?', answer => {
    console.log(`the name is ${answer}!`);

    rl.close();
});