'use strict';
const prompt = require('prompt'),
      _      = require('lodash'),
      fs     = require('fs');

switch(process.argv[2]) {
    case '-string':
        var result = {};
        result.seperators = process.argv[3],
        result.terminator = process.argv[4],
        result.string     = process.argv[5];
        cmd_args(result);
        break;
    case '-path':
        var result = {};
        result.seperators = process.argv[3],
        result.terminator = process.argv[4],
        result.path     = process.argv[5];
        cmd_args(result);
        break;
    case '-prompt':
        prompt_args();
        break;
}

function cmd_args(result) {
    verbose(result);
    if (result.path) {
        _.each(fs.readdirSync(result.path), (filename) => {
            console.log(split(result.seperators, result.terminator, filename).join('","') +'","'+ filename);
        });
    } else {
        console.log(split(result.seperators, result.terminator, result.string));
    }
    
}

function split(seperators, terminator, string) {
    let substring = string.trim().split(terminator)[0];
    var array = _.map(substring.split(new RegExp('['+seperators+']')), (el) => {
        return el.trim();
    });
    return array;
}

function prompt_args() {
    prompt.start();
    prompt.get(['seperators', 'terminator', 'string'], (err, result) => {
        verbose(result);
        console.log(split(result.seperators, result.terminator, result.string));
    });
}

function verbose(result) {
    console.log('Input:');
    console.log('  seperators: ' + result.seperators);
    console.log('  terminator: ' + result.terminator);
    if (result.string) {
        console.log('  string: ' + result.string);
    } else if (result.path) {
        console.log('  path: ' + result.path);
    }
};
