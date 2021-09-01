const validatePassword = require('./passwordvalidation'); //import the function
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Your code goes here!

const RecursionAsyncInput = function() {
    rl.question('Enter a password to validate (or :q to quit) ', function (word) { //input
        if (validatePassword(word) == false && word != ':q') { //If false: invalid
            console.log(`Passoword is invalid: ${word}`);
        }
        else if (validatePassword(word) == true && word != ':q') { //If true: valid
            console.log(`Password is valid: ${word}`);
        }
        if (word == ':q'){ //If user quits
            console.log('Goodbye!');
            return rl.close();
        }
        
        RecursionAsyncInput(); //callback function
    });
};

RecursionAsyncInput();