// Doing things with array elements
//1
const shoppingList = ["milk", "ice-cream", "chips", "toilet-paper"];

//2
shoppingList.forEach(function(item) {
  console.log(item);
});

//3
const ul = document.querySelector("ul");
shoppingList.forEach(function(item) {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

//4
const numbers = [1, 2, 4.5, -10.25];

//5
const squareNumbers = numbers.map(number => number * number);
console.log(squareNumbers);
