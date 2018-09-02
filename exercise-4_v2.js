//Array
//1
const names = ["david", "gordon", "sahil"]
console.log(names)

//2
console.log(names[2])

//3
console.log(names.length)

//4
names.length = 1

//5
console.log(names.length)

//6
console.log(names)

//7
names.push("jane", "yulian")

//8
console.log(names[names.length - 1])

//9
console.log(names[names.length - 2])

//10
document.querySelectorAll("p")[1].textContent = "JavaScript was here!"
console.log(document.querySelectorAll("p")[1].textContent)

//11
const namesString = names.join("<br>")
console.log(namesString)

//12
document.querySelectorAll("p")[0].innerHTML = namesString
console.log(document.querySelectorAll("p")[0].innerHTML)

document.querySelectorAll("p")[0].textContent = namesString
console.log(document.querySelectorAll("p")[0].textContent)

//OR

const pTagArray = document.querySelectorAll('p');

console.log(pTagArray[0])

console.log(pTagArray[0].textContent)

pTagArray[0].innerHTML = namesString

console.log(pTagArray[0].innerHTML)

