var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    'content': '认真的学习，来测试一波！',
    'cid': 348
})

var options = {
    hostname: 'wwww.imppc.com',
    post: 80,
    path: '/course/document',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=5ab940c1-2309-4bf4-b165-a3ec81db6744; imooc_isnew_ct=1495114040; imooc_isnew=2; UM_distinctid=16248e2024a5cb-0b70210a119652-32667b05-13c680-16248e2024c1d2; CNZZDATA1261110065=1295505721-1497055004-https%253A%252F%252Fwww.baidu.com%252F%7C1521637011; loginstate=1; apsid=EzZTQ5Zjk3YjYwOTc0Y2RkZjBkZWMyZTU5NmNmMWEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjUyNDExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADUwNTU5ZDcwZWQ1Njg3NzljNWQ4MmQzNzI0MWZhOWYz52eyWgAAAAA%3DOG; PHPSESSID=4v0e6p7uohevdno40g8n3qtnm3; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1520128846,1521641194,1521727248; IMCDNS=0; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1522245972; cvde=5ab3b70e9c05f-107',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/comment/348',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options, function (res) {
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));

    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk)
    });

    res.on('end', function () {
        console.log('评论成功！')
    });

    res.on('error', function (e) {
        console.log('Error:' + e.message)
    });
});
req.write(postData);

req.end();