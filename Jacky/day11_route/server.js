var _http = require('http');
var _url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathname = _url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(pathname);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello world');
        response.end();
    }
    _http.createServer(onRequest).listen(5252);
    console.log("Server has started.");
}

exports.start = start;