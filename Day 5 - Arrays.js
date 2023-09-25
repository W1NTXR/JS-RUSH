let a = [1,2,3,4,"bruh",false] // can be of multiple data types
for(let i in a) {
    console.log(a[i])
}
console.log(a[6])
a[6]=44
console.log(a[6])
console.log(a.length)
//can change value of an array
a[1] = 45
console.log(a)