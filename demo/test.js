var fs = require('fs');

// 读取文件
fs.readFile('./myModule.js', function (err, data) {
    if (err) throw err;
    console.log('sccussefuly: ', data)
})

// 删除文件
fs.unlink('./myModule.js', function (err) {
    if (err) throw err;
    console.log('删除成功！')
})
