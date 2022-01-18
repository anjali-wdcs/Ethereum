const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messagelogged',(arg) => {
    console.log('Listener called', arg);
});

logger.log('message');


//5 Sync-
//const fs = require('fs');
//const files = fs.readdirSync('./');
//console.log(files);

//6 Async-
//fs.readdir('./', function(err, files){
    //if (err) console.log('Error', err);
    //else console.log('Result', files);
//});


//4 Os module-
//const os = require('os');
//var totalMemory = os.totalmem();
//var freeMemory = os.freemem();
//console.log(`Total memory: ${totalMemory}`);
//console.log(`Free memory: ${freeMemory}`);


//3 Path module-
// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);


//1   const log = require('./logger');
//2  log('message');

//sep- console.log(module);