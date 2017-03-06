import express from 'express';

const app = express();

app.use((req, res) => {

    res.send('<h1>Hello World!</h1>');

    //res.sendStatus(500).send('Internal Server Error');
    
    // res.header('Content-Type', 'appliation/json');
    // res.writeHead(200);
    // res.write('{ "name": "test" }');
    // res.end();

});

app.listen(8080, err => {

    if (err) {
        console.error(err);
        return;
    }

    console.log('connected on port 8080');

});

