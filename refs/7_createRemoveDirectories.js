/* -------------------------------------------------------------------------- */

/******************************************************************************/
/******************** (7) CREATING & REMOVING DIRECTORIES *********************/
/******************************************************************************/
/*********************************** APP.JS ***********************************/
/******************************** ^^ used in ^^ *******************************/
/******************************************************************************/
/******************************* _6_README.TXT ********************************/
/********************************* ^^ uses ^^ *********************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */



/****************************************/
/***** 
 ***** we can also DELETE files (not just directories)
 ***** - still REQUIRES \C\fs\C\
 ***** - USE \C\fs.unlink(param1)\C\
 *****      - \C\param1\C\ is \F\_6_writeMe2.txt\F\
 ***** - be careful about this, because there will be
 *****   an error if that file doesn't exist in the
 *****   directory (check for correct path) or if the
 *****   file has already been deleted
 ***** - HERE: removes \F\_6_writeMe2.txt\F\
 *****/
/****************************************/

var fs = require('fs');

// fs.unlink('_6_writeMe2.txt');
 
 
/* -------------------------------------------------------------------------- */


/************************************************************/
/***** 
 ***** CREATE directories synchronously 
 ***** - use \C\fs.mkdirSync(param1)\C\
 *****      - node needs explicit method names (Sync vs Async)
 *****      - \C\mkdir\C\ means "make directory"
 *****      - \C\param1\C\ is the directory's name
 ***** - HERE: 
 *****      - \C\param1\C\ is \C\'stuff'\C\
 *****/
/************************************************************/

// fs.mkdirSync('stuff');


/* -------------------------------------------------------------------------- */


/*************************************************/
/***** 
 ***** REMOVE directories synchronously 
 ***** - use \C\fs.rmdirSync(param1)\C\
 *****      - \C\rmdir\C\ means "remove directory"
 *****      - \C\param1\C\ is the directory's name
 ***** - HERE: 
 *****      - \C\param1\C\ is \C\'stuff'\C\
 *****/
/*************************************************/

// fs.rmdirSync('stuff');


/* -------------------------------------------------------------------------- */
 
/***************************************************************/
/*****
 ***** CREATE directories asynchronously (more ideal)
 ***** - REMOVE 'Sync' from \C\fs.mkdirSync();\C\
 ***** - USE \C\fs.mkdir(<dir_name>, param2(){...});\C\
 *****      - REMEMBER asynchronous methods need to know when
 *****        to stop running, hence a \C\param2\C\ function
 ***** - HERE: 
 *****      - first, we want ot make the directory \C\stuff\C\
 *****      - then we want the callback function to read 
 *****        \F\_6_readMe.txt\F\ once \C\stuff\C\ is made
 *****      - since \C\fs.readFile()\C\ is asynchronous, it
 *****        also needs a callback function. here, we want it
 *****        to write \F\_6_writeMe.txt\F\ with the data
 *****        read from \F\_6_readMe.txt\F\
 *****      - write \F\_6_writeMe.txt\F\ INTO new \C\stuff\C\
 *****          - use \C\fs.readFile(param1, param2)\C\
 *****          - \C\param1\C\ is the new file name with the
 *****            correct path (note the './stuff/'')
 *****          - \C\param2\C\ is \C\data\C\ read from
 *****            \F\_6_readMe.txt\F\
 *****        also needs a callback function. here, we want it
 *****        to write \F\_6_writeMe.txt\F\ with the data
 *****        read from \F\_6_readMe.txt\F\
 *****      - since \C\fs.writeFile()\C\ is also asynchronous, it
 *****        also needs a callback function. here, we want it
 *****        to write \F\_6_writeMe.txt\F\ with the data
 *****        read from \F\_6_readMe.txt\F\
 *****/
/***************************************************************/

/* fs.mkdir('stuff', function() {
    fs.readFile('_6_readMe.txt', 'utf8', function(err, data) {
        fs.writeFile('./stuff/_6_writeMe.txt', data);
    });
}); */


/* -------------------------------------------------------------------------- */
 
/**************************************************************************/
/*****
 ***** REMOVE directories asynchronously (also more ideal)
 ***** - directories can't be removed if they aren't empty, so delete
 *****   files found inside first
 *****      - REMEMBER \C\fs.unlink()\C\ for deleting files from before!
 *****      - this time, pass callback function as a \C\param2\C\ and
 *****        this can be our original intended method: removing \C\stuff\C\
 *****      - we want to remove \C\stuff\C\ & \F\_6_writeMe.txt\F\ (inside)
 *****/
/**************************************************************************/

fs.unlink('./stuff/_6_writeMe.txt', function() {
    fs.rmdir('stuff'); 
});

 


/* -------------------------------------------------------------------------- */

/******************************************************************************/
/********************************** end of : **********************************/
/******************** (7) CREATING & REMOVING DIRECTORIES *********************/
/******************************************************************************/
/******************************* video: (10/37) *******************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */