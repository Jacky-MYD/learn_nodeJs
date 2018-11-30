var http = require('http');
var fs = require('fs');
var request = require('request')

http
    .createServer(function (req, res) {
        // fs.readFile('./icustomer.jpg', function (err, data) {
        //     if (err) {
        //         res.end('file not exist!');
        //     } else {
        //         res.writeHeader(200, {'Context-Type': 'text/html'})
        //         res.end(data);
        //     }
        // })


        // fs.createReadStream('./icustomer.jpg').pipe(res)


        request('http://www.baidu.com/img/bd_logo1.png?qua=high').pipe(res)

    })
    .listen(8090)