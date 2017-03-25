var http = require('http')

const PORT=8080;

function handleRequest(reg, resp) {
     resp.end('<h1>welcome to my webpage</h1>');
}

var server = http.createServer(handleRequest);

//start our server
server.listen(PORT,function(){
// this is a callback, get used to it now 
console.log("server is running on ports %s", PORT);
});



