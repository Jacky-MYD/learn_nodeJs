var fs = require('fs');
var source = fs.readFileSync('./icustomer.png');

// 写入文件
fs. writeFileSync('stream_copy_icustomer.png', source)