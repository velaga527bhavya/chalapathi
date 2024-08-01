var express = require('express');
var app = express();
 
app.get('/',function(req,res){
	res.send("welcome to express js world by bhavya")
});
app.listen(3000); 