/**
 * 打开文件
 * fs.open(path, flags[, mode], callback)
 * 参数：
 * path - 文件的路径。
 * flags - 文件打开的行为。具体值详见下文。
 * mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
 * callback - 回调函数，带有两个参数如：callback(err, fd)。
 * @type {"fs"}
 *
 * flags 参数可以是以下值： http://www.runoob.com/nodejs/nodejs-fs.html
 *
 */

 var fs = require("fs");
 // 异步打开文件
 // console.log("准备打开文件！");
 // fs.open('./input.txt', 'r+', function (err, data) {
 //     if (err) {
 //         return console.error(err);
 //     }
 //     console.log("文件打开成功！");
 // })

/**
 * 获取文件信息
 * fs.stat(path, callback)
 * 参数：
 * path - 文件的路径。
 * callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象
 * @type {"fs"}
 * fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件
 * stats类中的方法有：http://www.runoob.com/nodejs/nodejs-fs.html
 */

// console.log("准备打开文件！");
// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("读取文件信息成功！");
//
//     // 检测文件类型
//     console.log("是否为文件(isFile) ? " + stats.isFile());
//     console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
// });

/**
 * 写入文件
 * fs.writeFile(file, data[, options], callback)
 * 参数：
 * file - 文件名或文件描述符
 * data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
 * options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
 * callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
 * @type {"fs"}
 * writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。
 */

// console.log("准备写入文件");
// fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("数据写入成功！");
//     console.log("--------我是分割线-------------")
//     console.log("读取写入的数据！");
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("异步读取文件数据: " + data.toString());
//     });
// });

/**
 * 读取文件
 * fs.read(fd, buffer, offset, length, position, callback)
 * 参数：
 * fd - 通过 fs.open() 方法返回的文件描述符。
 * buffer - 数据写入的缓冲区。
 * length - 要从文件中读取的字节数
 * position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
 * callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
 * @type {"fs"}
 */

var buf = new Buffer.alloc(1024);

// console.log("准备打开已存在的文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功！");
//     console.log("准备读取文件：");
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//         if (err){
//             console.log(err);
//         }
//         console.log(bytes + "  字节被读取");
//
//         // 仅输出读取的字节
//         if(bytes > 0){
//             console.log(buf.slice(0, bytes).toString());
//         }
//     });
// });

/**
 * 关闭文件
 * fs.close(fd, callback)
 * 参数：
 * fd - 通过 fs.open() 方法返回的文件描述符。
 * callback - 回调函数，没有参数。
 * @type {"fs"}
 */

// console.log("准备打开文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功！");
//     console.log("准备读取文件！");
//     fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//         if (err){
//             console.log(err);
//         }
//
//         // 仅输出读取的字节
//         if(bytes > 0){
//             console.log(buf.slice(0, bytes).toString());
//         }
//
//         // 关闭文件
//         fs.close(fd, function(err){
//             if (err){
//                 console.log(err);
//             }
//             console.log("文件关闭成功");
//         });
//     });
// });

/**
 * 截取文件
 * fs.ftruncate(fd, len, callback)
 * 参数：
 * fd - 通过 fs.open() 方法返回的文件描述符。
 * len - 文件内容截取的长度。
 * callback - 回调函数，没有参数。
 * @type {"fs"}
 */

// console.log("准备打开文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功！");
//     console.log("截取10字节内的文件内容，超出部分将被去除。");
//
//     // 截取文件
//     fs.ftruncate(fd, 10, function(err){
//         if (err){
//             console.log(err);
//         }
//         console.log("文件截取成功。");
//         console.log("读取相同的文件");
//         fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
//             if (err){
//                 console.log(err);
//             }
//
//             // 仅输出读取的字节
//             if(bytes > 0){
//                 console.log(buf.slice(0, bytes).toString());
//             }
//
//             // 关闭文件
//             fs.close(fd, function(err){
//                 if (err){
//                     console.log(err);
//                 }
//                 console.log("文件关闭成功！");
//             });
//         });
//     });
// });

/**
 * 删除文件
 * fs.unlink(path, callback)
 * 参数：
 * path - 文件路径。
 * callback - 回调函数，没有参数。
 * @type {"fs"}
 */

// console.log("准备删除文件！");
// fs.unlink('input.txt', function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件删除成功！");
// });

/**
 * 创建目录
 * fs.unlink(path, callback)
 * 参数：
 * path - 文件路径。
 * mode - 设置目录权限，默认为 0777。
 * callback - 回调函数，没有参数。
 * @type {"fs"}
 */
// console.log("创建目录 /tmp/test/");
// fs.mkdir("/tmp/test/",function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log("目录创建成功。");
// });

/**
 * 读取目录
 * fs.readdir(path, callback)
 * 参数：
 * path - 文件路径。
 * callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。
 * @type {"fs"}
 */

// console.log("查看 /tmp 目录");
// fs.readdir("/tmp/",function(err, files){
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach( function (file){
//         console.log( file );
//     });
// });


/**
 * 删除目录
 * fs.unlink(path, callback)
 * 参数：
 * path - 文件路径。
 * callback - 回调函数，没有参数。
 * @type {"fs"}
 */

console.log("准备删除目录 /tmp/test");
fs.rmdir("/tmp/test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 /tmp 目录");
    fs.readdir("/tmp/",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});