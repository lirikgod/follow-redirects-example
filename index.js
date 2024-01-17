const https = require('follow-redirects').https;

function test1 () {
    const options = {
        'method': 'GET',
        'hostname': 'crossoutdb.com',
        'path': '/api/v1/items',
        // 'headers': {
        //     'apikey' : '123',
        // }
        'maxRedirects': 10
    };

    const req = https.request(options,  function (res) {
        let chunks = [];

        res.on('data', function (chunk) {
            chunks.push(chunk);
        });
        res.on('error', function (error) {
            console.log(error);
        });
        res.on('end', function () {
            let body = Buffer.concat(chunks);
            console.log(JSON.parse(body.toString()));
        });

    });
    req.end();
};
test1();