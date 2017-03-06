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