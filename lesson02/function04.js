'use strict';


function getCount(callback) {


    setTimeout(function () {

        callback(null, 5);
    }, 1000);
}

function prepareTextOfCount(error, count) {

    if(error) {
        return ' there was some errors';
    }


    return 'count is :' + count;
}




getCount(function (err, count) {

    const text = prepareTextOfCount(err, count);


    console.log('hey the result is ready');
    console.log(text);
});


console.log('starting up');