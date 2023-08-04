var http = require('http');

var server= http.createServer (function(req,res){
    
    res.writeHead(200,{'Cnodeontent-type':'application/json'});
    res.write(JSON.stringify({message:'Hello JSON'}));
    res.end();
});

server.listen(5000);
console.log('web server running at port 5000');
