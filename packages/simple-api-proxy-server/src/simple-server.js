var http = require('http'),
    httpProxy = require('http-proxy');

// Create a proxy server with custom application logic
var proxy = httpProxy.createProxyServer({});

// When a request comes in, decide which target to call based on request
var server = http.createServer(function(req, res) {
    var target;

    // Here you would have some logic to decide which API to call based on the request
    if (req.url.startsWith('/solid')) {
        // Request is intended for the SOLID API
        target = 'http://solid-api.com';
    } else if (req.url.startsWith('/csharp')) {
        // Request is intended for the C# API
        target = 'http://csharp-api.com';
    }

    // If target is defined, proxy the request
    if (target) {
        proxy.web(req, res, { target: target });
    } else {
        res.writeHead(500);
        res.end('No target defined for this request');
    }
});

console.log("listening on port 5050")
server.listen(5050);

// export the server module:
module.exports = server;