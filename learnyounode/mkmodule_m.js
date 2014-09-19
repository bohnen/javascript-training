module.exports = function ls (dir,ext,callback){
	var fs = require('fs');
	var path = require('path');
	var dirs = [];

	fs.readdir(dir,function(err,list){
		if(err)
			return callback(err,dirs);
		list.forEach(function(data){
			list = list.filter(function(data){
				return path.extname(data) === '.' + ext;
			});
		});
		callback(null,list);
	});
};