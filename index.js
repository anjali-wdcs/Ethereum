const express = require('express');
const app = express();
const websocket = require('ws');

const server = require('http').createServer(app);

app.get('/',(req,res) =>  {
    console.log("listening")
    var Web3 = require('web3');
    var web3 = new Web3('https://speedy-nodes-nyc.moralis.io/23c5a393f65202cc699ac2a6/eth/ropsten');
    var block = web3.eth.getBlockNumber().then(console.log);
    res.send(block)

})

server.listen(3000, () => console.log(`Listening on port :3000`))