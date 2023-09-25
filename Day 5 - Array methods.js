let num = [1,2,3,45]
let b = num.toString()
console.log(b)
let c = num.join("_")
console.log(c) // it will be a string
console.log(typeof c)
num.pop() //changes the array itself also returns the popped element
num.push(56) // pushes an element into the array
let r = num.shift() // removes the first element and returns it
let q = num.unshift(75) // adds an element in the begginning of the array
delete num[0] //it is not a function but an operator
//it does not changes the length
let num2 = ["bruh", "bruh"]
console.log(r, num)
console.log(num.concat(num2)) //does not changes the original array
num[0] = 44
num.push(4)
num.push(33)
num.push(false)
num.sort()
console.log(num) // sorts the original array ALPHABETICALLY
//you can add an optional sort function to sort too for ex 
let cmp = (a,b) => {
    return a - b //or ascending b-a for descending
}
num.sort(cmp)
console.log(num)
num.reverse() //changes the array
console.log(num)
let deletedValues = num.splice(2,4,1023,1231,424,1231,442) // removes the elements at the positions and adds new elements there
//also returns deleted values
console.log(num)
console.log(deletedValues)

let num4 = num.slice(2) //creates a new array from ith to end or ith to i+nth
console.log(num4)
