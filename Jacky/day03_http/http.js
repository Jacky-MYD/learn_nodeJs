var http = require('http')

http
    .createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write('Hellon Nodejs');
        res.end()
    })
    .listen(2018)