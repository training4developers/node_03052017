import fs from 'fs';

// function Promise(fn) {

//     this.resolveFns = [];

//     function resolve(results) {
//         this.resolveFns.forEach(fn => {
//             fn(results);
//         });
//     }

//     this.then = function(fn) {
//         this.resolveFns.push(fn);
//     }

//     fn(resolve, reject);

// }


const p = new Promise((resolve, reject) => {
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        console.log('resolved');
        resolve(JSON.parse(data));
    });
});

console.log("made it here...");

p.then(results => {
    console.log('all done');
    console.log('file contents:', results);
});

p.then(results => {
    console.log('all done');
    console.log('file contents:', results);
});

console.log("made it here 2...");


