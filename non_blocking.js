// Concurrency
// non- blocking
// Mashing things up

// task_1: call back

setInterval(function(){
	console.log("world\n");
},2000);

console.log("Hello\n");

//task_2: clint-side http request
var http = require('http');

setInterval(function(){
	http.get({ host:'google.com'}, function(res){
		console.log(res.headers);
	});
},5000);

//task_3: http server

var s = http.Server(function(req,res){
	res.writeHead(200);
	setInterval(function(){
		res.end("Hello\n");		
	},1000);

});

s.listen(8000);	
