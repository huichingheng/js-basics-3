console.log('Exercise-5:')

// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ['carrot','tomato','potato']

// 2. Using `forEach`, log every element of the `shoppingList` array to the console
shoppingList.forEach(function (item) {
    console.log(item);
})
// OR shoppingList.forEach(item => console.log(item));

// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)
const ul = document.querySelector('ul') 

shoppingList.forEach(function (item) {

    const li = document.createElement('li')
    li.textContent = item
    
    ul.appendChild(li)
        

}) 

console.log(ul)

// 4. Create a new array `numbers` with a few numeric elements
const numbers = [1, 2, 4.5, -10.25]

// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array
// const squareNumbers = numbers.map(function (number) {
//     return number*number;
// })
const squareNumbers = numbers.map(x => x*x);
console.log(squareNumbers)

// const squareNumbers = numbers.map(number => number ** 2);

// console.log('numbers:', numbers);
// console.log('squareNumbers:', squareNumbers);

