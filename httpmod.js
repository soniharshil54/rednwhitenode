var http = require("http");
var server = http.createServer(function(req,res){
	console.log("server created")

	  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
	

})

server.listen(5000); 