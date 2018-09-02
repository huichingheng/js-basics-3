// 1. Create an array `names` with at least 3 elements: `'david'`, `'gordon'`, and
//    `'sahil'` and log it to the console
const names = [
    'david',
    'gordon',
    'sahil'
]
console.log('1. ', names);

// 2. Log the value of the third element in `names` to the console
console.log('2. ', names[2]);

// 3. Log the value of the `names` array's `length` property to the console
console.log('3. ', names.length);

// 4. Set the value of the `length` property to `1`
names.length = 1;

// 6. Once again, log the value of the `names` array's `length` property to the
//    console. Did it change?
console.log('6. ', names.length);

// 7. Log the entire `names` array to the console again
console.log('7. ', names);

// 8. Add a few more elements to the array using `push`
names.push('yulian', 'minzhuang', 'mayuri', 123, true);
console.log('8. ', names.length)
console.log('8. ', names)

// 9. Log the last element of the array to the console
// console.log(names[]);
console.log(names[5]);

// 10. Log the second last element of the array to the console
console.log(names[names.length-2])

// 11. Change the `textContent` property of the _second_ `p` tag on the page to
//    `"JavaScript was here!"`
document.querySelectorAll('p')[1].textContent = 'JavaScript was here!'
console.log(document.querySelectorAll('p')[1])

// 12. Convert the `names` array to a string, with each element separated by a
//    '<br>'. Store it in a new variable called `namesString` e.g. if `names` is
//    `['harry', 'ron', 'dean']` then `namesString` will be `"harry<br>ron<br>dean"`
const nameString = names.join("<br>")
console.log('12. ', nameString)

// 13. Change the `innerHTML` property of the _first_ `p` tag on the page to
//    `namesString`. What happens when you use `textContent` instead of
//    `innerHTML`?
// document.querySelectorAll('p')[0].innerHTML = 'namesString'
// console.log(document.querySelectorAll('p')[0])
// document.querySelectorAll('p')[0].textContent = 'namesString'
// console.log(document.querySelectorAll('p')[0])
const firstTag = document.querySelectorAll('p')[0]
firstTag.innerHTML = 'namesString'
console.log(firstTag.innerHTML)

firstTag.textContent = 'namesString'
console.log(firstTag.textContent)


let function1 = function() {
    console.log('From function 1');
}

function function2() {
    console.log('From function 2');
}