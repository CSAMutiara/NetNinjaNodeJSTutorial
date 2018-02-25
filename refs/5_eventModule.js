/* -------------------------------------------------------------------------- */

/******************************************************************************/
/*************************** (5) NODE EVENT EMITTER ***************************/
/******************************************************************************/
/*********************************** APP.JS ***********************************/
/******************************** ^^ used in ^^ *******************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */



/*********************************************************************/
/***** 
 ***** REQUIRE in-built modules (such as the event module) from node.js 
 ***** - note: both custom and "pre-shipped" modules exist 
 ***** - required similarly, but using module name, not path name
 ***** - HERE: \C\var events = require('events');\C\
 *****/
/*********************************************************************/

var events = require('events');
 
 
/* -------------------------------------------------------------------------- */


/***************************************************************************/
/***** 
 ***** using Node's event emitter
 ***** - event emitter is accessible when the module \C\events\C\ is required
 ***** - allows us to react when events emit
 *****      - these events can be custom created
 ***** - similar to jquery 
 ***** - use: \C\element.on();\C\
 ***** - HERE:
 *****      - when the event \C\'click'\C\ is emitted on this \C\element\C\,
 *****      - this callback \C\function(){...}\C\ is fired
 *****/
/***************************************************************************/

// element.on('click', function(){});

 
/* -------------------------------------------------------------------------- */
 
 
/***********************************************************************/
/*****
 ***** in node.js we can CREATE custom event reactions with event emitter
 ***** - custom events instead of \C\'click'\C\ for example
 ***** - create new var for each custom event because event emitter
 *****   is a constructor and needs to be assigned to something
 ***** - in other words:
 *****      - after node.js module 'events' is required, 
 *****      - a new emitter instance that is created can be saved
 ***** - HERE: 
 *****      - \C\myEmitter\C\ represents an event emitter instance
 *****      - when the event \C\'someEvent'\C\ occurs, \C\myEmitter\C\
 *****        will fire \C\function(mssg){...}\C\, thus logs \C\mssg\C\
 *****/
/***********************************************************************/

/* var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
}); */
 

/* -------------------------------------------------------------------------- */
 
/***********************************************************************/
/*****
 ***** USE the event emitter instance to fire callback functions
 ***** - in other words: emit the event 
 ***** - use: \C\<eventemitter_name>.emit(param1, **param2)\C\ 
 *****      - \C\param1\C\ is desired emitted event
 *****      - **if callback function takes params, that is \C\param2\C\ 
 ***** - HERE: 
 *****      - when \C\'someEvent'\C\'s emitted, \C\'myEmitter\C\ fires
 *****        the corresponding callback function... which is:
 *****      - thus myEmitter receives \C\emit()\C\'s second param as mssg
 *****        for \C\function(mssg)\C\
 *****      - since \C\function(mssg)\C\ logs mssg, mssg is logged to the
 *****        console as a result of the following line of code
 *****/
/***********************************************************************/

//myEmitter.emit('someEvent', 'the event emits y\'all');

 
/* -------------------------------------------------------------------------- */
 
/****************************************************************************/
/*****
 ***** a more complicated example of event emitter's capabilites
 ***** - REQUIRE another node.js module: \C\util\C\ 
 *****      - which is a utilities module... with many capabilites, such as:
 *****      - allows us to inherit certain things from various objects
 *****        (can be node's built-in objects or otherwise)
 ***** - CREATE new object to USE \C\util\C\ 
 *****      - ASSIGN the new object (created with a constructor) to a var
 ***** - INHERIT event emitter
 *****      - use \C\util.inherits(param1, param2)\C\
 *****      - \C\param1\C\ is the object constructor and
 *****      - \C\param2\C\ what is to be inherited
 ***** - CREATE instances of the object constructor (for inheritance)
 ***** - CONNECT ("wire up") event listeners to each \C\Person\C\ instance
 *****   using custom events
 *****      - store these instances in an array (\C\people\C\ for example)
 ***** - ITERATE each \C\Person\C\ instance instance in \C\people\C\
 *****      - use \C\<array_name>.forEach(function(param1){...});\C\
 *****      - \C\param1\C\ can use event listeners with \C\util.inherits()\C\)
 *****      - for listeners use: \C\<param1>.on(<event>, <callback>)\C\
 *****        so that when each \C\<event>\C\ is emitted on \C\param1\C\,
 *****        the \C\<callback>\C\ function is fired
 *****      - this is useful so that you don't need to wire up listeners
 *****        for each \C\Person\C\ instance since they should all
 *****        execute the same callback function
 ***** - EMIT/CALL events
 ***** - HERE: 
 *****      - when var \C\Person\C\ is called, a name param must be passed 
 *****      - using \C\util\C\, \C\Person\C\ can inherit
 *****      - event emitters from \C\events\C\
 *****      - \C\util.inherits()\C\ allows \C\Person\C\ to inherit 
 *****        event emitters from \C\events\C\
 *****      - \C\param1\C\ of \C\people.forEach(function(param1){...});\C\
 *****        is each \C\person\C\ (note: NOT \C\Person\C\ constructor)
 *****      - when the event \C\'speak'\C\ is emitted on each \C\person\C\,
 *****        the console will log that the person "said" a message
 *****/
/***************************************************************************/

var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("james");
var mary = new Person("mary");
var ryu = new Person("ryu");
var people = [james, mary, ryu];

people.forEach(function(person) {
    person.on('speak', function(mssg) {
        console.log(person.name + " said " + mssg);
    });
});

james.emit('speak', 'hey dudes');
james.emit('speak', 'I want a curry');


 

/* -------------------------------------------------------------------------- */

/******************************************************************************/
/********************************** end of : **********************************/
/*************************** (5) NODE EVENT EMITTER ***************************/
/******************************************************************************/
/******************************* video: (8/37) ********************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */