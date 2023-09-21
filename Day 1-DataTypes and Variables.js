//variables in js

//JS is a dynamically typed language you dont have to pre define a data type for a variable
//semicolons are not generally needed in js

var a = "letsgo"
//var is globally scoped and let is block scoped
//AVOID USING VAR AT ALL COSTS
let b = "code";
{
    let b = "idk"
    console.log(b)
}
// a var can be updated and redeclared
// let can be updated but cant be redeclared
//const can neither be updated nor be redeclared
const me = "W1NTXR"
//const should always be initialized
console.log(b)
console.log(a)
console.log(me)

//Primitive data types and objects
/*
There are 7 data types in JS NN BB SS U
    1. Null
    2. Number
    3. Boolean
    4. BigInt
    5. String
    6. Symbol
    7. Undefined
*/

let a1 = null
let b1 = 444
let c = true
let d = BigInt(600)
let e = "this is a string"
let f = Symbol("I am a good symmbol")
let g = undefined // or just leave it as it is like let g 
console.log(a1,b1,c,d,e,f,g)
console.log(typeof f)

//Objects
/*
    key value pairs
    non primitive data types are objects
*/

const item = {
    "jindhad":11,
    "rissu": 20,
    "system":false
} 
console.log(item["jindhad"])