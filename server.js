var http = require('http');
var handler = function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello nod.js i love you\n');
}
server = http.createServer(handler)
server.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
