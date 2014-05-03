// Shows an important characteristic of NODE
// It has reference pointers to the call backs
// process exists only when it has no reference pointers
// In other words process exists when it has no call back functions left

setInterval(function () {
	console.log("World\n");
},2000);

console.log("Hello\n");