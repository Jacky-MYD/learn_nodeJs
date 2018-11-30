var server = require("./server");
var router = require("./router");

server.start(router.route);
console.info('info', 11)
console.error('error',22)
console.warn('warn',33)
console.dir('dir',44)
console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
//
console.timeEnd('获取数据');

console.info("程序执行完毕。")
