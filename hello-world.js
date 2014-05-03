// PHP
// echo ("Hello\n");
// sleep(2);
// echo("World\n");

// Non blocking behavior

setTimeout(function () {
	console.log("World\n");
},2000);

console.log("Hello\n");
