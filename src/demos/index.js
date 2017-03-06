// 1. Create several static html file
// 2. Use the URL information to load the correct static file
// 3. Move the code to read the file from disk to a separate module
// 4. EXTRA CREDIT: Manage the asynchronous call to read the file with a promise


import http from 'http';
import fs from 'fs';
import path from 'path';
import { getFile } from './data';

const server = http.createServer( (req, res) => {

    console.log(req.method);
    console.log(req.headers['host']);
    console.log(req.url);

    let fileName = 'index.html';

    if (req.url !== '/') {
        fileName = req.url.slice(1);
    }

    getFile(path.join(__dirname, '..', 'src', fileName)).then(content => res.end(content));

} );

server.listen(8080, () => {
    console.log('server running on port 8080');
});