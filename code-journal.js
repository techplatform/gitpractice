/* Variables - containers that store values */

var name // a decalred varible, but not initialized and its in the global scope

var foo //a declared variable that can be changes

const bar // a declared varible that cannot be changed - short for 'constant'

const ANSWER = 42 // const is declared and initialized with the value 42

// String 

let string1 = 'Hello World!' // read '=' ad 'is assigned the calue of...'

let string2 = "Hello Utah!"

let string3 = new String('Hello World!')

// Number

let myNum = 2083972347

let myNum2 = 75.43

'1' == 1 // this statement is true because of type coercion and loose equality checking
'1' === 1 // false because this is strict equality checking

// Boolean 

let myBool = true

// Array

let myArray = [] // this is an empty array
//              0     1     2       3       4
let myArray2 = [42, 'Bob', myBool, ANSWER, true]

let secondElement = myArray2[]

myArray2.push('Aniela') // added an element to the end of myArray2

myArray2.unshift('Hello World!')

let mylosingString = '32408usfjalieriweur938u425ksdjfowiur84uwrlwshdjfo8wuroiwejr4e' // just an array of characters

mylosingString.length

// Object

let minObject = {}

const myCar = {
    make: 'Chevrolet',
    color: 'Red',
    year: '1965',
    vin: '2390487sijweoru38lirehs'
};

myCar.numDoors = 2;

const anotherObject = {
    wordz: ["foo", "bar", "baz"],
    car: {
        make: "McLaren",
        model: "675LT"
    },
    awesomness: true
};

// Functions 

function myFunction() {
    return "My greeting to you...";
}

function sumTwoThings(one, two){
    //watch out for data type issues here!
    return one + two; //if numbers, will add them. If strings, will concatenate.
}

// Arrow Functions 