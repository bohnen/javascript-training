var fs = require('fs');
fs.readFile(process.argv[2],function(err,data){
      // fs.readFile(file, 'utf8', callback) can also be used
	if(err != true){
		console.log(data.toString().split('\n').length -1);
	}
});