console.log('hey ninjas');
// logs 'hey ninjas'

/* setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000);*/
// exits node (timeout) and logs so after 3 seconds

/* var time = 0;
setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
}, 2000); */
// logs after every 2 interval that pases

/* var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5){
        clearInterval(timer);
    }
}, 2000); */
// logs after every 2 seconds but halts when time passes 5 (@6 seconds)

//console.log(__dirname);
// tells us what directory we're in

console.log(__filename);
// tells us what file (and its directory) we're in