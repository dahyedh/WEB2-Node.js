const fs = require('fs');

/*
//readFileSync
console.log('A');
const result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C')
*/


//readFile
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', (err, result) =>{
    console.log(result);
});
console.log('C')