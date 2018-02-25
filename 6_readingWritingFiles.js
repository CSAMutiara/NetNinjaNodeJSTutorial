/* -------------------------------------------------------------------------- */

/******************************************************************************/
/********************* (6) READING & WRITING FILES (FS) ***********************/
/******************************************************************************/
/*********************************** APP.JS ***********************************/
/******************************** ^^ used in ^^ *******************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */



/***************************************************************************/
/***** 
 ***** node module \C\fs\C\ allows us to read and write files on our computer
 ***** - REQUIRE using \C\var fs = require('fs');\C\
 ***** - \C\fs\C\ does many other things too
 ***** - CREATE/FIND file for \C\fs\C\ to read
 ***** - READ file using \C\fs.readFileSync(param1, param2);\C\
 *****      - synchronous version (so following code won't run until
 *****        this function has finished executing)
 *****      - asynchronous version exists (will visit later)
 *****      - \C\param1\C\ is desired file to read
 *****      - \C\param2\C\ is character encoding 
 ***** - HERE:
 *****      - \F\readMe.txt\F\ is desired file to read
 *****      - 'utf8' is \C\param2\C\ for binary to chars conversion
 *****/
/**************************************************************************/

var fs = require('fs');
 
// fs.readFileSync('readMe.txt', 'utf8');
 
 
/* -------------------------------------------------------------------------- */


/*********************************************************/
/***** 
 ***** READ the file
 ***** - CREATE var to SAVE the module as its value 
 ***** - LOG new var to console
 ***** - HERE: \C\fs.readFileSync('readMe.txt', 'utf8');\C\
 *****   is saved to \C\readMe\C\
 *****/
/*********************************************************/

// var readMe = fs.readFileSync('_6_readMe.txt', 'utf8');
// console.log(readMe);

 
/* -------------------------------------------------------------------------- */
 
/*****************************************************************/
/*****
 ***** WRITE files 
 ***** - use synchronous \C\fs.writeFileSync(param1, param2);\C\ 
 ***** - \C\param1\C\ is where we want the file to be written to
 ***** - \C\param2\C\ is the data we want to write **** - 
 ***** - in other words: 
 *****      - SAVE read pre-existing file to var 
 *****      - MODIFY var 
 *****      - SAVE modified var to new file **** - 
 ***** - HERE: 
 *****      - \C\param1\C\ is \C\'_6_writeMe.txt'\C\
 *****      - \C\param2\C\ is the var \C\readMe\C\
 *****      - thus, \C\'_6_writeMe.txt'\C\ is a copy of
 *****        \C\'_6_readMe.txt'\C\ (which was modified afterwards)
 ***** - \C\\C\ **** - 
 ***** - \F\\F\ **** - 
 *****/
/*****************************************************************/

/* var readMe = fs.readFileSync('_6_readMe.txt', 'utf8');

fs.writeFileSync('_6_writeMe.txt', readMe); */
 

/* -------------------------------------------------------------------------- */
 
/****************************************************************************/
/*****
 ***** Asynchronous version of \C\.readFileSync()\C\ 
 ***** - REMOVE var (it's unecessary)
 ***** - REMOVE 'Sync' from \C\.readFileSync()\C\ & \C\.writeFileSync()\C\
 ***** - USE \C\fs.readFile('_6_readMe.txt', 'utf8', func(p3a, p3b));\C\
 *****      - asynchronous methods need a callback function to fire
 *****        when process is complete (hence the \C\param3\C\)
 *****      - the \C\param3\C\ function has two of it's own params
 *****          - \C\p3a\C\ is \C\err\C\ (for if there is an error)
 *****          - \C\p3b\C\ is the data we read from the \C\param1\C\ file
 ***** - BENEFITS: since the method isn't blocking following code (which
 *****   it would if it were a synchronous method), following code can run
 *****   while \C\fs\C\ reads \C\_6_readMe.txt\C\
 *****      - can test with \C\console.log('test');\C\ ... \C\'test\C\
 *****        should be logged before the \C\data\C\ even though its
 *****        code is second
 ***** - HERE:
 *****      - we want the process to end when using \C\param3\C\
 *****      - \C\p3b\C\ is \C\data\C\
 *****      - once \C\fs.readFile()\C\ has finished reading 
 *****        \C\_6_readMe.txt\C\, the \C\param3\C\ function will fire
 *****      - thus, the console logs \C\data\C\
 *****      - then, \C\fs.readFile()\C\ ends
 ***** - \C\\C\ **** - 
 ***** - \F\\F\ **** - 
 *****/
/****************************************************************************/

/* fs.readFile('_6_readMe.txt', 'utf8', function(err, data) {
    console.log(data);
}); */

// fs.writeFile('_6_writeMe2.txt', readMe); 

// console.log('test');


/* -------------------------------------------------------------------------- */
 
/****************************************/
/*****
 ***** Asynchronous version of \C\.writeFileSync()\C\
 ***** - WRITE files using same approach
 ***** - TRY inside \C\fs.readFile()\C\
 ***** - in other words: **** - 
 ***** - HERE:
 *****      - \C\param2\C\ for \C\fs.writeFile();\C\ is 
 *****        \C\data\C\ from \C\fs.readFile()\C\
 ***** - \C\\C\ **** - 
 ***** - \F\\F\ **** - 
 *****/
/****************************************/

fs.readFile('_6_readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('_6_writeMe2.txt', data); 
}); 


 

/* -------------------------------------------------------------------------- */

/******************************************************************************/
/********************************** end of : **********************************/
/********************* (6) READING & WRITING FILES (FS) ***********************/
/******************************************************************************/
/******************************* video: (9/37) ********************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */