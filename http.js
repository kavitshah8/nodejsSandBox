var http = require('http');

var s = http.Server(function (req,res) {
	res.writeHeader(200,{'content-type':'text-plain'});
	res.end("Hello World\n");
});

s.listen(8000);