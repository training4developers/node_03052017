
import path from 'path';
import fs from 'fs';

const dataFile = path.join('src', process.argv[2]);

//sync approach
const rawData = fs.readFileSync(dataFile, 'utf8');
const data = JSON.parse(rawData);

const nextId = data.map(item => item.id).reduce((prev, current) =>
    Math.max(prev,current) + 1);
data.push({ id: nextId, name: 'test', color: 'red' });

// async approach
// fs.readFile(dataFile, 'utf8', (err, rawData) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(rawData);
//     const data = JSON.parse(rawData);
//     console.log(data);
// });

// stream approach
// const rs = fs.createReadStream(dataFile, { encoding: 'utf8' });
// let rawData = '';

// rs.on('end', function() {

//     console.log(rawData);
//     console.log(JSON.parse(rawData));

// });

// rs.on('data', function(data) {

//     rawData += data;

// });

// write sync
//fs.writeFileSync(dataFile, JSON.stringify(data, null, '\t'), { encoding: 'utf8' });

//write async
// fs.writeFile(dataFile, JSON.stringify(data, null, '\t'), { encoding: 'utf8' }, err => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log('all done');
// });

// write stream
const ws = fs.createWriteStream(dataFile, { encoding: 'utf8' });
ws.write(JSON.stringify(data, null, '\t'));
ws.end();

// console.log(data);


// //process.stdin.setEncoding('utf8');



// process.stdin.on('readable', function() {

//     const input = process.stdin.read();

//     if (input != null) {

//         console.log(typeof input);

//         const command = input; //.toString().trim();

//         if (command === 'exit') {
//             process.exit();
//         }

//         const commandBuffer = Buffer.from(command);

//         process.stdout.write(input);
//         process.stdout.write(JSON.stringify(commandBuffer));
//         process.stdout.write(commandBuffer.toString());
//     }

//     const prompt = '\nEnter Command> ';
//     process.stdout.write(prompt);

// });