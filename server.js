var connect = require('connect');
var http = require('http');

var app = connect();

var serve = require('serve-static');
app.use(serve('./src'));

http.createServer(app).listen(5000);
