//deleting the file

const fs = require('fs');

fs.unlinkSync('Welcome.txt');
console.log('File Delete successfully');
