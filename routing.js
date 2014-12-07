var http = require('http');
var handler = function (req, res) {
  if (req.url === '/sayhello'){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('You told me to say hello ???\n');
    }
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('Page not found baby !!!!\n');

    }
}
server = http.createServer(handler)
server.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
