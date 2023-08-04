var http = require('http');
var  uc = require('upper-case');

var server = http.createServer(function(req,res){
    res.write(uc.upperCase("hi , i  am going to learn node.js... thank you!!"));
    res.end();
}).listen(5000);
