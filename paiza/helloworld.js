// hello, world! Node.js
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk){
	console.log("Hello,World");
	console.log(chunk.toString());
});