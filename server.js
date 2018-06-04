"use strict"; 


const http = require("http"); // allows us to create server using http built-in module
const random = require("./random-fact"); // all the functionality/information from random-quote can be imported in here now 
console.log(random()); // console logging to check random quote in terminal 

http.createServer((request, response) => { // the method that allows you to create the server (a bult-in method) 
    response.writeHead(200, {         //writeHead method takes two parameters 200 & this standard object
        "Content-type": "text/plain"    // standard practice 
    }); 
    response.write(random()); // puts random quote on the page (write will only take a string) 
    response.end();            // ends communication 

}).listen(3000);   // must run listen method w/ port number 





