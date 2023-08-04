//http module : to create server
//http is core module

var http = require('http');

var server= http.createServer (function(req,res){
    //handle incoming request
    res.write('Welcome to Node.js');
    res.end();
});

server.listen(5000);
console.log('web server running at port 5000');
