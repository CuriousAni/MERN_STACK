//append file
//append data ih existing file

const fs = require('fs');

fs.appendFileSync('Welcome.txt','\nappend data in existing file');
console.log('File has been append');
