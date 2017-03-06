import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());

app.use('/', (req, res, next) => {

    console.log(req.body);

    res.message = 'Hallo Wereld!!!';
    next();
});

app.use('/', (req, res, next) => {
    res.message += ' Ahlan Alam!!!';
    next();
});

app.use('/', (req, res) => {
    res.message += ' Bonjour le monde!!!';

    res.send(res.message);
});

app.use('/thai', (req, res) => {
    res.status(500).send('Unsupported Language');
});

app.use(express.static('src'));

app.listen(8080, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('web server started on port 8080');
});