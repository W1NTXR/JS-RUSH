for(let i = 0; i < 22; i++) {
    console.log(i)
}

let obj = {
    rissu : 54,
    saru : 32,
    seenu : 56
}
//for in also works in arrays
for (let a in obj) {
    console.log(obj[a])
}

for(let c of "Saaransh") {      //wont work for objects because they are not iterable but will work with arrays
    console.log(c);
}

let i = 0

while(i < 4) {
    console.log(i)
    i++
}
i = 0
do {
    console.log(i)
    i++
}while(i<3)