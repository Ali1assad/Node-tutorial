const {writeFileSync , readFileSync} = require('fs');
console.log('start');
const fisrt = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log('waiting');
console.log(fisrt , second);

writeFileSync('./content/result-txt.txt' , `this is the result : ${fisrt} , ${second}` , { flag: 'a'}
);

console.log('end');