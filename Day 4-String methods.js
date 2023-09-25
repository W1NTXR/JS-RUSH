let str = "lESsgo"
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.slice(2)) //from ith index until end
console.log(str.slice(2,4)) //from ith index to jth index
console.log(str.replace("lES","let"))
console.log(str.trim()) // removes whitespaces
console.log(str.concat("bruh"))

//strings are immutable. In order to access the character at an index we use 
let nem = "jindhad"
nem[4] = "x"
console.log(nem[4])