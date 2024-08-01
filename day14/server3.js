var http = require('http');
var fs = require('fs')
http.createServer(function (req,res){  //request,responce
	fs.readFile('client.html',function(err,data){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(data);
	return res.end();});

}).listen(8080);   //to recognise the we are runnig in server with the help of listen and port number