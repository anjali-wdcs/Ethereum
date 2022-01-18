const EventEmitter = require('events');

//1 console.log(__filename);
//console.log(__dirname);

var url = 'http://mylogger.io/log';
class Logger extends EventEmitter{
    log(message){
        // send http request
        console.log(message);

        // Raise an event 
    this.emit('messagelogged', {id : 1, url : 'http://'});
    }
}
module.exports = Logger;