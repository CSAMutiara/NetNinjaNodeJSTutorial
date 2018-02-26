/* -------------------------------------------------------------------------- */

/******************************************************************************/
/**************************** (9) CREATING A SERVER ***************************/
/******************************************************************************/
/************************************ APP.JS **********************************/
/******************************** ^^ used by ^^ *******************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */



/********************************************************/
/***** 
 ***** MAKE a server with the nodejs core module: 'HTTP' 
 ***** - use \C\var http = require('http');\C\
 ***** - STORE server in var for easy access later on
 *****      -  use \C\var server = http.createServer();\C\
 ***** - HERE: 
 *****      - as is, the server is created but it won't be
 *****        able to respond to any requests
 *****/
/********************************************************/

var http = require('http');

//var server = http.createServer();
 
 
/* -------------------------------------------------------------------------- */


/***********************************************************************/
/***** 
 ***** allow server to HANDLE client requests 
 ***** - use \C\var server = http.createServer(function(p1, p2));\C\
 *****      - \C\p1\C\ is the request
 *****      - \C\p1\C\ is the response
 *****      - passing this function(<request>, <response>) into 
 *****        \C\http.createServer());\C\ provides the server the
 *****        functionality to work with requests and responses
 ***** - in other words: 
 ***** - HERE: 
 *****      - \C\req\C\ has the details of the client's "request"
 *****      - \C\res\C\ is the subsequent "response" the server fires
 *****      - so when \C\server\C\ receives \C\req\C\, it fires \C\res\C\
 *****/
/***********************************************************************/

/*var server = http.createServer(function(req, res) {
}); */

 
/* -------------------------------------------------------------------------- */
 
 
/*****************************************************************/
/*****
 ***** RESPONSE HEADERS
 ***** - clients send servers requests WITH request headers
 ***** - servers send clients response data WITH response headers
 ***** - HEADERS are extra information about reqs/res
 *****      - similar to how <head></head> sections of .html files
 *****        tells browsers a little bit more info about the doc
 *****        though that info is not actually shown on the browser
 *****  - includes: (i.e.) 
 *****      - content-types: so the browsers knows what to expect
 *****        like plain text or html b/c each should be dealt
 *****        with differently by the browser
 *****      - status: like 200 or 404 for "everything was ok" or
 *****        "page cannot be found" respectively
 ***** - first, CREATE response headers
 *****      - USE \C\res.writeHead(param1, param 2);\C\
 ***** - SERVE them some information
 *****      - \C\param1\C\ is the status
 *****      - \C\param2\C\ an object
 ***** - then END response and send it to the browser with:
 *****      - USE \C\res.end(param1);\C\ in which we can send
 *****        back some information/data (\C\param1\C\)
 *****      - that info/data IS the response body
 ***** - this means that now, we're sending the server the
 *****   headers and the response body itself
 ***** - HERE:  
 *****      - \C\param2\C\ is the content type (using 
 *****        \C\'Content-Type': \C\)... note capitals!
 *****      - here, \C\res.end(param1);\C\ passes plain text
 *****      - \C\'Hey ninjas\n'\C\ include '\n' for style
 *****/
/*****************************************************************/

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas\n');
}); 
 

/* -------------------------------------------------------------------------- */
 
 
/**********************************************************/
/*****
 ***** USE \C\server.listen(<portnumber>, <IP_address>);\C\
 ***** so the server can listen to a particular port
 ***** - REMEMBER: we can set up nodejs to listen to a
 *****   particular port for requests because at this
 *****   point, if we "our local host" were to make a 
 *****   request, it still wouldn't work w/o a port
 ***** - in other words: 
 *****      - when the port 3000 receives a request, it'll
 *****        respond by firing the function passed in
 *****        \C\createServer();\C\
 ***** - generally, it's good practice to log an indicative
 *****   message to the console so we know the server is
 *****   actively listening to a port
 *****      - i.e. "now listening to port 3000"
 ***** - at this point, the server is pretty much set up.
 *****      - you can test it after you run node on the
 *****        server's file. if the file is locally run,
 *****        you can directly test the server's response
 *****        in the browser (USE \C\<IP>:<portnumber>\C\)
 *****        but if it's on a cloud you have to USE
 *****        \C\curl -v localhost:<portnumber>\C\)   
 *****      - each time you want to check the response,
 *****        you have to re-run the server FIRST
 ***** - HERE: **** - 
 *****      - \C\<portnumber>\C\ is 3000 and
 *****      - \C\<IP_address>\C\ is 127.0.0.1 (a local host)
 ***** - \C\\C\ **** - 
 ***** - \F\\F\ **** - 
 *****/
/***********************************************************/

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
 


/* -------------------------------------------------------------------------- */

/******************************************************************************/
/********************************** end of : **********************************/
/**************************** (9) CREATING A SERVER ***************************/
/******************************************************************************/
/******************************* video: (12/37) *******************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */