const names  = require('./names');
const sayHi  = require('./app');
const object  = require('./testObject');
require('./function-without-import');


sayHi(names.ali);
sayHi(names.sami);

console.log(object)

