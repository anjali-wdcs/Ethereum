const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messagelogged',(arg) => {
    console.log('Listener called', arg);
});

logger.log('message');

/*const log = require('./logger');
  log('message');

Now you can use different kinds of modules -

 Sync-
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

 Async-
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});


 Os module-
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);


 Path module-
 const path = require('path');
 var pathObj = path.parse(__filename);
 console.log(pathObj);

console.log(module);    */
