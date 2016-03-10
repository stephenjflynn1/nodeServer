var http = require('http');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'} )
	response.write('Hello Node JS Server Response'); 
	response.end();
	}).listen(7000);








