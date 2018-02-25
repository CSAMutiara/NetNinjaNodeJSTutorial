/* -------------------------------------------------------------------------- */

/******************************************************************************/
/********************* (6) READING & WRITING FILES (FS) ***********************/
/******************************************************************************/
/*********************************** APP.JS ***********************************/
/******************************** ^^ used in ^^ *******************************/
/******************************************************************************/
/************* _6_README.TXT, _6_WRITEME.TXT & _6_WRITEME2.TXT ****************/
/********************************* ^^ uses ^^ *********************************/
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
 *****      - thus, \F\'_6_writeMe.txt'\F\ is a copy of
 *****        \F\'_6_readMe.txt'\F\ (which was modified afterwards)
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
 *****   while \C\fs\C\ reads \F\_6_readMe.txt\F\
 *****      - can test with \C\console.log('test');\C\ ... \C\'test\C\
 *****        should be logged before the \C\data\C\ even though its
 *****        code is second
 ***** - HERE:
 *****      - we want the process to end when using \C\param3\C\
 *****      - \C\p3b\C\ is \C\data\C\
 *****      - once \C\fs.readFile()\C\ has finished reading 
 *****        \F\_6_readMe.txt\F\, the \C\param3\C\ function will fire
 *****      - thus, the console logs \C\data\C\
 *****      - then, \C\fs.readFile()\C\ ends
 *****/
/****************************************************************************/

/* fs.readFile('_6_readMe.txt', 'utf8', function(err, data) {
    console.log(data);
}); */

// fs.writeFile('_6_writeMe2.txt', readMe); 

// console.log('test');


/* -------------------------------------------------------------------------- */
 
/*****************************************************/
/*****
 ***** Asynchronous version of \C\.writeFileSync()\C\
 ***** - WRITE files using same approach
 ***** - TRY inside \C\fs.readFile()\C\
 ***** - HERE:
 *****      - \C\param2\C\ for \C\fs.writeFile();\C\ is 
 *****        \C\data\C\ from \C\fs.readFile()\C\
 *****/
/*****************************************************/

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