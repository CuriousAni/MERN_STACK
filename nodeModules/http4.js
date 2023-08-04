/* Multiple Path */




var http = require('http');

var server= http.createServer (function(req,res){

    if(req.url=='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h3> This is Home Page </h3>');
        res.end();
    }
    else if(req.url=='/student'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h3> This is Student Page </h3>');
        res.end();
    }
    else if(req.url=='/admin'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h3> This is Admin Page </h3>');
        res.end();
    }
    else{
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h3> Invalid Request </h3>');
        res.end();
    }
    }
);

server.listen(50000);
console.log('web server running at port 50000');

