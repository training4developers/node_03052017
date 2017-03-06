import http from 'http';

const server = http.createServer((req, res) => {

    console.log(req.headers['host']);
    console.log(req.method);
    console.log(req.url);
    console.log(req.socket.remoteAddress);

    console.log(req.rawHeaders);

    res.end('<h1>Hello World</h1>');

});

server.listen(8080, err => {

    if (err) {
        console.log(err);
        return;
    }

    console.log('web server running on port 8080');

});

