var ethers = require('ethers');  
var crypto = require('crypto');

var id = crypto.randomBytes(32).toString('hex');
var privateKey = "0x"+id;
console.log("THE PRIVATE KEY IS :", privateKey);

var wallet = new ethers.Wallet(privateKey);
console.log("Address: " + wallet.address);