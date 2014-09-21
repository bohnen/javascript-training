var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function(socket){
    var date = strftime("%Y-%m-%d% %H:%M%n",new Date());
    socket.end(date);
});
server.listen(Number(process.argv[2]));