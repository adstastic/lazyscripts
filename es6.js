'use strict';
const _ = require('lodash');
// let vs var, with promises and fat-arrow syntax
(() => {

    var item = {};
    item.let = {};
    item.var = {};
    var then = 0;

    // using Promise to make sure the assignment loops have finished before calling values
    // normally would assign promise to variable and execute as `promiseVar.then(...)` 
    new Promise((resolve, reject) => {
        for (let i = 1; i < 6; i++) {
            item.let[i] = () => { console.log(i) };
        }

        for (var j = 1; j < 6; j++) {
            item.var[j] = () => { console.log(j) };
        }

        resolve("then " + ++then);  // passes value to .then
    }).then((result) => {
        console.log(result);    // result is value passed to resolve above
        _.each(item, (val, key) => {
            console.log("using " + key);
            _.each(val, (val, key) => {
                process.stdout.write("  " + key + " : ");
                val();
            });
        });
    }, (error) => {
        console.log("error", error);
    });

    // let has block-level scope so each the value of i doesn't change once assigned
    // value of item.var[j] is final value of j in loop so all item.var[j] = 6

})();
