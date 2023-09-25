let num = [24,21,20,11]
let a = num.map((value, index, num)=>{
    console.log(value, index, num)
    return value + index
})
console.log(a)
// we use map when we want to create a new array
// we use forEach when we have to perform operations in an array

let num2 = [32,31,2,3,8,66,31]
let a2 = num2.filter((a)=>{
    return a < 10
})
console.log(a2)
//these arrays dont change the array
let a3 = num2.reduce((h1,h2) => {
    return h1 + h2;
})
//takes 0th and 1th index and performs the desired operations and keeps on moving forward
console.log(a3)