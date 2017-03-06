1. Create several static html file
2. Use the URL information to load the correct static file
3. Move the code to read the file from disk to a separate module
4. EXTRA CREDIT: Manage the asynchronous call to read the file with a promise


import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer( (req, res) => {

    console.log(req.method);
    console.log(req.headers['host']);
    console.log(req.url);

    fs.readFile(path.join(__dirname, '..', 'src', 'index.html'), 'utf8', (err, data) => {
        res.end(data);
    });

} );

server.listen(8080, () => {
    console.log('server running on port 8080');
});