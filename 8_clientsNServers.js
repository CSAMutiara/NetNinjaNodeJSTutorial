/* -------------------------------------------------------------------------- */

/******************************************************************************/
/**************************** (8) CLIENTS & SERVERS ***************************/
/******************************************************************************/
/************************************ APP.JS **********************************/
/******************************** ^^ used by ^^ *******************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */



/**********************************************************/
/***** 
 ***** Clients sends a REQUESTto the
 ***** Server to handle, then sends clients back a RESPONSE
 ***** - PROTOCOLS: a set of communication rules, that two
 *****   sides agree to use when communicating
 *****      - two machines may not understand each others'
 *****        "mother-tongue", thus, to communicate, they 
 *****        must choose protocols they both understand
 *****      - protocols are also chosen depending on what
 *****        type of information is being transmitted
 *****      - i.e. POST or GET are HTTP Protocols
 ***** - SOCKET: a channel for information to be sent
 *****   between clients & servers (to connect IPs)
 *****      - each client & server has it's own IP ADDRESS
 *****      - this transmitted info is structured with 
 *****        different protocols (such as HTTP or 
 *****        FTP: File Transfer Protocol)
 ***** - TCP(rotocol): sends "packets" of the transmitted 
 *****   information (in agreed Protocol structure) through
 *****   the socket
 ***** - NODE JS allows us to access these functionalities
 *****   so we can open a connection between two machines
 *****   and send information between the two
 *****      - if we run nodejs in a server we can tell node
 *****        what info we want to send to clients when
 *****        the server make a particular response
 ***** - PORTS: a program running on a computer that can
 *****   listen for requests sent to a particular port #
 *****      - each machine can use one or multiple ports
 *****      - like how one building can have many doors
 *****      - i.e. 172.24.86.76:3000 (IP:PORT)
 *****      - nodejs will listen through a particular port
 *****        as opposed to other ports used by other
 *****        programs, and will only receive a server's
 *****        response if it is sent to nodejs's port
 ***** - REMEMBER: 
 *****      - we're not the client, the browser is
 *****      - TCP & chosen protocol work together to send
 *****        info between clients and servers
 *****/
/**********************************************************/



/* -------------------------------------------------------------------------- */

/******************************************************************************/
/********************************** end of : **********************************/
/**************************** (8) CLIENTS & SERVERS ***************************/
/******************************************************************************/
/******************************* video: (11/37) *******************************/
/******************************************************************************/

/* -------------------------------------------------------------------------- */