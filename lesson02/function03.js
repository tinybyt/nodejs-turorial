'use strict';

function multiplyTwo(error, num) {

    if(error) {
        console.log('there are errors can not proceed');
        return;
    }

    console.log(num * 2);
}


function readFromDb(callback) {

    setTimeout(function () {

        let error = 'ajhsdfjkahdjfh ';
        let count = 5;

        callback(error , count);

    }, 2000);
}


readFromDb(multiplyTwo);