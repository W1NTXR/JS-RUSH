let num = [12,435,634,550]
for(let i = 0; i < num.length;i++) {
    console.log(num[i])
}
num.forEach((i)=>{
    console.log(i*i)
})

//if you have an html collection you cant use forEach we will use Array.form(arrayname) to convert it into an array

let nur = "rissu"
let arr = Array.from(nur)
for (let i of nur) {
    console.log(i)
}
for(let k in nur) {
    console.log(k) // returns keys 
}