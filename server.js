const http = require('http');
const server = http.createServer ((req,res) => {
    
    // console.log(“message on server”);
    console.log(req.url, req.method);
    
    // setting header
    res.setHeader('Content-type', 'text/html');
   
    res.write("<p>Hello World!</p>");
    res.write("<p>Hello Universe!</p>");
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log("Listening on port 3000...");
});
