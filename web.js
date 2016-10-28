var http = require('http');
var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Warm Welcome from Flynn on port '+port+' from container '+process.env.HOSTNAME+'\n');
}).listen(port, function() {
  console.log("Listening on " + port);
});
