const http = require('http');
const server = http.createServer ((req,res) => {
    // console.log(“message on server”);
    console.log(req.url, req.method);
    res.setHeader('Content type', 'text/html');
    res.write("Hello World!");
    res.end();
});

server.listen(3000, () => {
    console.log("Listening on port 3000...");
});