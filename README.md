node.js学习篇
====
#### day01，server配置
* day01 <br>
        在设置好主机名和端口号后，通过调用`http`的createServer方法，在回调函数中传入参数，在返回值中设置状态码和请求头,
    另外通过调用`http`的listen方法来监听服务。
#### day02， 以学校为例，搭建一个小型的项目案例
* day02
        在一个学校中我们有班级，我们可以把班级看成一个类，班级里有老是和学生。我们分别在学生、老师和班级里定义一个方法，并通过index页调用班级。

#### day03， callback、async、scope、http等
* day03
        这里主要简述学校回调函数、异步、作用域、事件已经http源码的解读。

#### day04，http性能测试
        语法：ab -n1000 -c10 http://www.baidu.com/，
        另外以慕课网为例学习一个小爬虫

#### day05, 事件的监听、移除及查询
        ```
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
        ```