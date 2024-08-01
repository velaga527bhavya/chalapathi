var balaji = require('http');
balaji.createServer(function (req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('Hello World........');
	res.write(req.url);
	res.end();

}).listen(5000);