/*
URl Module: build-in module
It breaks down the url into readable parts
parse : its a method that return URL objects with each parts

*/

let url = require('url');
var adr = 'http://localhost:3000/search?year=2023&month=May'

var q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;

console.log(qdata.year);
console.log(qdata.month);