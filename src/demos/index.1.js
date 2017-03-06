import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';

import { putFile } from './data';
import { getConfig } from './config';

const app = express();

app.use(bodyParser.json());

app.use((req, res) => {

    putFile('test.txt', JSON.stringify(req.body, null, '\t'))
        .then(() => res.send('ok'))
        .catch(() => res.status(500).send('failed'));
});


getConfig().then(config => {

    app.listen(config.port, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('web server started on port ' + config.port);
    });

});
