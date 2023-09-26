let obj = {
    a: 1,
    b: 2,
    c: 3
}

console.table(obj)
console.warn("Just lift bro") // gives warning in console
console.info("bhai maan ja") // gives info in console
console.error("err" != false) //prints error
console.error("err"==false)
console.time("p1")
console.timeEnd("p1")   //gives the duration between time and timeEnd you have to pass the same label in both functions

console.time("forLoop")
for(let i = 1; i < 11 ; i++) {
    console.log(11)
}
console.timeEnd("forLoop")