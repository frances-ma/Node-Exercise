"use strict"; 
const http = require("http"); // connects to server 
const random = require("./random-quote"); // all the functionality from random-quote can be imported in here now 
console.log(random()); 

http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-type": "text/plain"
    }); 
    response.write(random()); // write will only take a string 
    response.end(); 

}).listen(3000); 






