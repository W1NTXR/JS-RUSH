 const prompt = require("prompt-sync")({sigint:true})
 let a = prompt("What's your age")
// prompt inputs value (string)
//alert displays value

a = Number.parseInt(a)
//type conversion of string into number
console.log(typeof a)
if(a > 0) console.log("this is a valid age")
else console.log("Enter a valid age")
console.log("You can",(a<18?"not drive":"drive") )