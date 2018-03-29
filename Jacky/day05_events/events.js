var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();
life.setMaxListeners(11); // 一般默认10个事件，当超过10个时，会给出警告，主要是为了防止内存泄漏

function water(who) {
    console.log('给 ' + who + ' 倒水');
}

life.on('testFun', water);

life.on('testFun', function (who) {
    console.log('给 ' + who + ' 揉肩');
})

life.on('testFun', function (who) {
    console.log('给 ' + who + ' 做饭');
})

life.on('testFun', function (who) {
    console.log('给 ' + who + ' 洗衣服');
})
life.on('testFun', function (who) {
    console.log('给 ' + who + ' 5');
})

life.on('testFun', function (who) {
    console.log('给 ' + who + ' 6');
})

life.on('testFun', function (who) {
    console.log('给 ' + who + ' 7');
})
life.on('testFun', function (who) {
    console.log('给 ' + who + ' 8');
})

life.on('testFun', function (who) {
    console.log('给 ' + who + ' 9');
})

life.on('testFun', function (who) {
    console.log('给 ' + who + ' 10');
})

life.on('testFun', function (who) {
    console.log('给 ' + who + ' 111');
})

life.on('testFun222', function (who) {
    console.log('给 ' + who + ' 1222');
})


// 移除事件, 要先定义一个function, 并且将这个fun传的监听事件中，如上面的倒水例子
life.removeListener('testFun', water); // 单个移除
// life.removeAllListeners(); // 移除所有（无参数时)
// life.removeAllListeners('testFun222'); // 传入参数，只移除指定的事件

life.emit('testFun', '汉子');

var hasConfortListerner = life.emit('testFun222', '妹子'); // 判断事件是否被监听，返回true／false
var hasPlayListerner = life.emit('testFun333', '妹子');

// 查询事件的剩余个数
console.log(life.listeners('testFun').length);
console.log(EventEmitter.listenerCount(life, 'testFun'))

// console.log(hasConfortListerner); // true
//
// console.log(hasPlayListerner); // false