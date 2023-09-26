alert("Enter the value of a!")
let a = prompt("Enter a here", "578") //we can give another parameter which will give it a default case
document.write(a)
a = Number.parseInt(a)
alert("You Entered a of type" + typeof a)
let write = confirm("Do u want to write this on the page")
if(write) {
    document.write(a)
}
else {
    document.write("pls allow me to write")
}

// they delay the main execution thread of the program