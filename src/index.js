import express from 'express';

import router from './router';

const app = express();

app.use('/api', router);


app.listen(8080, err => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('web server started on port 8080');
});
