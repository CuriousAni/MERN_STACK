//hhttp query string : property of URL
//it contains basic contain of URL


var http = require('http');

var server= http.createServer (function(req,res){
    //handle incoming request
    //200 for OK
    res.writeHead(200,{'content-type':'text/html'});
    res.write(req.url);
    res.end();
});

server.listen(500);
console.log('web server running at port 500');
