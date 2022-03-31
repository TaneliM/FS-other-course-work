const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Response
    res.write("Hello");
    res.end()
}).listen(5000, () => console.log("Server started..."));