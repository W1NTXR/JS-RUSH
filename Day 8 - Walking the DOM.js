//DOM tree refers to the HTML page where all the nodes are objects and there can be three main types of nodes in the DOM Tree
//text nodes, Element nodes, Comment nodes

console.log(document.body.firstChild)
//element.firstChild --> to access the first child of an element
//element.lastChild --> to access the last child of an element
//element.childNodes --> All child nodes

console.log(document.body.childNodes[0])
//elem.childNodes[0] === element.firstChild
//elem.childNodes[length - 1] === element.lastChild

console.log(document.body.hasChildNodes)
//elem.hasChildNodes() to check whether there are any child Nodes

let arr = Array.from(document.body)
console.log(arr.length)
//childNodes looks like an array but it is not. It's actually a collection. We can use Array.form(collection) to convert it into Array.
