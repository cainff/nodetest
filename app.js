var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>');
});

http.listen(1337, function(){
        console.log('listening on *:1337');
});

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.use('/img', express.static(__dirname + '/img'));


