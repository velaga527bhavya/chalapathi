var fs = require('fs');

fs.writeFile('apple.txt','could you understand',function(err){
	if(err) throw err;
 console.log('Saved1');})
;