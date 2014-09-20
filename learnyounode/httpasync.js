var http = require('http');
var bl = require('bl');
var res = new Array(3);

// これは失敗、callbackしたら必ず成功するのだから、数をカウントするのが良い
res.hasCompleted = function(){
    var result = true;
    for(var i=0;i<res.length;i++){
        if(this[i] === undefined)
            result = false;
    }
    return result;
};

res.printAll = function(){
    for(var i=0;i<3;i++){
        console.log(this[i]);
    }
};

var mkcallback = function(j){
    return function(response){
        response.pipe(bl(function(err,data){
            if(err)
                console.error(err);
            res[j] = data.toString();
            if(res.hasCompleted())
                res.printAll();
        }));
    };
};

for(var i=0;i<3;i++)
    http.get(process.argv[2+i],mkcallback(i));
