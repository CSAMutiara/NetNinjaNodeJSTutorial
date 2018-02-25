/* -------------------------------------------------------------------------- */

/******************************************************************************/
/******************************** (4) STUFF.JS ********************************/
/******************************************************************************/
/************************** APP.JS -- MODULE PATTERNS *************************/
/******************************** ^^ used by ^^ *******************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */



/*********************************************************************/
/***** 
 ***** to export MULTIPLE modules: ADD other module exports**** -
 ***** - in other words: 
 *****      - create all modules & exports
 *****          - each \C\module.exports\C\ is an empty object & can be 
 *****            assigned to each corresponding module/variable
 *****          - use: \C\module.exports.<module_name>\C\ **** - 
 ***** - HERE:
 *****      - template strings instead of quotation marks
 *****          - use "back ticks": \C\``\C\ 
 *****          - useful because these allow us to embed variables 
 *****          - or expressions without concatenating them 
 *****          - use ${<desired operation>} 
 *****      - also export a variable (not just a module) \C\pi\C\
 ***** - export EACH desired SEPARATELY **** -
 *****/
/*********************************************************************/

/* var counter = function(arr) {
    return "There are " + arr.length + " elements in this array";
};

var adder = function(a, b) {
    return `The sum of the 2 numbers is ${a + b}`;
};

var pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi; */
 
 
/* -------------------------------------------------------------------------- */


/********************************************************************/
/***** 
 ***** SIMPLIFY by COMBINING function implementations 
 ***** with \C\module.exports.<function_name>\C\
 ***** - in other words: **** - 
 ***** - HERE: 
 *****      - \C\var pi = 3.142;\C\ and \C\module.exports.pi = pi;\C\ 
 *****        are combined to \C\module.exports.pi = 3.142;\C\
 *****      - \C\var counter = function(arr) {...};\C\ and
 *****        \C\module.exports.counter = counter;\C\ are combined to
 *****        \C\module.exports.counter = function(arr) {...};\C\
 ***** - \C\\C\ **** - 
 ***** - \F\\F\ **** - 
 *****/
/********************************************************************/

/* module.exports.counter = function(arr) {
    return "There are " + arr.length + " elements in this array";
};

module.exports.adder = function(a, b) {
    return `The sum of the 2 numbers is ${a + b}`;
};

module.exports.pi = 3.142; */
 

/* -------------------------------------------------------------------------- */
 
/**********************************************************************/
/***** 
 ***** another way with only one \C\module.exports\C\
 ***** - with var = function syntax 
 ***** - use \C\module.exports = {...};\C\
 *****      - \C\...\C\ in format: \C\<exported_name>: <module_name>,\C\
 ***** - HERE: \C\module.exports = {counter: counter,adder: adder,pi: pi};\C\
 *****/
/**********************************************************************/

var counter = function(arr) {
    return "There are " + arr.length + " elements in this array";
};

var adder = function(a, b) {
    return `The sum of the 2 numbers is ${a + b}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};



/* -------------------------------------------------------------------------- */

/******************************************************************************/
/********************************** end of : **********************************/
/********************************** STUFF.JS **********************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */