var mymodule = require('./mkmodule_m.js');

mymodule(process.argv[2],process.argv[3],function(err,dirs){
	if(err)
		return console.err("error");
	dirs.forEach(function(data){
		console.log(data);
	});
});