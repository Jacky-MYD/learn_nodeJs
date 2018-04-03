// 流复制
var fs = require('fs');

var readStream = fs.createReadStream('./icustomer.png');

var writeStream = fs.createWriteStream('1-icustomer.png');

readStream.on('data', function (chunk) {
    if (writeStream.write(chunk) === false) { // 防止读比写快，防爆仓
        console.log('still cached')
        readStream.pause();
    };
})

readStream.on('end', function () {
    writeStream.end();
});

writeStream.on('drain', function () {
    console.log('data drains');
    readStream.resume()
})