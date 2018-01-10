'use strict';

class CarHelper {

}

class Car {

    horn() {
        console.log('horn');
    }

    start() {
        console.log('started');
    }
}

module.exports = {
    Car,
    CarHelper
};