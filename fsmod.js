var http = require("http")
var fs = require("fs")

http.createServer(function(req,res) {
	console.log("server created")
	fs.readFile("demo.html",function(err,data){
		console.log("file read")
		res.writeHead(200, {'content-type': 'text-html'})
		res.write(data)
		res.end()
	})
	
}).listen(5000)