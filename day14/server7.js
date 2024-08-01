var fs = require('fs');

fs.appendFile('apple.txt',' again could you understand',function(err){
	if(err) throw err;
 console.log('Saved1');})
;