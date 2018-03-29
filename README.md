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

#### day05, 事件的监听、移除及查询，接口编写
* 事件的监听、移除及查询
        ```events.js
            var EventEmitter = require('events').EventEmitter; // 引进events的EventEmitter方法

            var life = new EventEmitter(); // 实例一个构造函数
            life.setMaxListeners(11); // 一般默认10个事件，当超过10个时，会给出警告，主要是为了防止内存泄漏

            function water(who) {  // 定义一个方法，用于移除事件时调用，因为直接移除事件是行不通的
                console.log('给 ' + who + ' 倒水');
            }

            life.on('testFun', water); // 事件

            life.on('testFun', function (who) { // 多个事件
                console.log('给 ' + who + ' 揉肩');
            })

            life.on('testFun', function (who) { // 多个事件
                console.log('给 ' + who + ' 做饭');
            })

            // 移除事件, 要先定义一个function, 并且将这个fun传的监听事件中，如上面的倒水例子
            life.removeListener('testFun', water); // 单个移除
            life.removeAllListeners(); // 移除所有（无参数时)
            life.removeAllListeners('testFun222'); // 传入参数，只移除指定的事件

            life.emit('testFun', '汉子');  // 监听'testFun'事件

            var hasConfortListerner = life.emit('testFun222', '妹子'); // 判断事件是否被监听，返回true／false
            var hasPlayListerner = life.emit('testFun333', '妹子');
            console.log(hasConfortListerner); // true
            console.log(hasPlayListerner); // false

            // 查询事件的剩余个数
            console.log(life.listeners('testFun').length);
            console.log(EventEmitter.listenerCount(life, 'testFun'))
        ```
* 接口编写
        由于方便的原因，编辑接口的文件在day03_http目录中的comment.js文件，该接口是以慕课网的评论接口为案例。。。



