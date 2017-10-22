var express = require('express');
var path = require('path');
var app = express();
app.use(express.static('./frontend'));
app.all(/.*/, function (req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, '..', 'frontend')
    });
});
app.listen(8080, function () {
    console.log('Server listening on port 8080.');
});
