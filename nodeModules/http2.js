//http server need to show output as html

//http header

var http = require('http');

var server= http.createServer (function(req,res){
    //handle incoming request
    //200 for OK
    res.writeHead(200,{'content-type':'text/html'});
    res.write('Hello from node.js http2 - text/html');
    res.end();
});

server.listen(500);
console.log('web server running at port 500');
