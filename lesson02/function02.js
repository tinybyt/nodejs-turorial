'use strict';

function Hello() {

    console.log('hello');
}


// setTimeout(LogHello , 1000);

setTimeout(
    function LogHello() {

        console.log('hello');
    },
    1000
);

