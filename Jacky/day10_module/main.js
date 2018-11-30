var Hello = require('./hello');

hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();
console.log('filename', __filename);
console.log('dirname',  __dirname );
console.info('info')

process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);
