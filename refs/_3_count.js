/* -------------------------------------------------------------------------- */

/******************************************************************************/
/******************************** (3) COUNT.JS ********************************/
/******************************************************************************/
/************************ APP.JS -- MODULES & REQUIRE() ***********************/
/******************************** ^^ used by ^^ *******************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */



/******************************************************************/
/***** sample functionality that will be "required" in app.js *****/
/******************************************************************/

var counter = function(arr) {
    return "There are " + arr.length + " elements in this array";
};


/* -------------------------------------------------------------------------- */


/************************************************************************/
/***** 
 ***** to call function in this file, include following line of code here
 ***** for now, commented out and pasted into app.js to be required there **** -
 *****/
/************************************************************************/

// console.log(counter(["shaun", "crystal", "ryu"]));


/* -------------------------------------------------------------------------- */


/*********************************************************************/
/***** 
 ***** in order to access the desired modules, you need to export them
 ***** even if you already "required" them elsewhere
 ***** - don't forget to export ALL the modules you need elsewhere
 ***** - in other words: when this file/module is required 
 *****   elsewhere, \C\exports\C\ returns the following functions 
 *****   to be accessed elsewhere (i.e. in \F\app.js\F\)
 ***** - HERE: \C\require('./count');\C\ accesses \F\count.js\F\
 *****   that is returned by \C\module.exports = counter;\C\ **** -
 *****/
/*********************************************************************/

module.exports = counter;



/* -------------------------------------------------------------------------- */

/******************************************************************************/
/********************************** end of : **********************************/
/******************************** (3) COUNT.JS ********************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */