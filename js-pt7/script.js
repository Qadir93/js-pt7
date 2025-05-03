var multiArray = [];
var multiArray = [[], [], []];  
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];



for (var i = 1; i <= 10; i++) {
  console.log(i);
}


var tableNumber = +prompt("Enter the table number:");
var tableLength = +prompt("Enter the length of the table:");

for (var i = 1; i <= tableLength; i++) {
  console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}



var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}



// a. Counting
document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

// b. Reverse counting
document.write("<h3>Reverse counting:</h3>");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

// c. Even
document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

// d. Odd
document.write("<h3>Odd:</h3>");
for (var i = 1; i < 20; i += 2) {
  document.write(i + ", ");
}

// e. Series
document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}



var a = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();

var found = false;

for (var i = 0; i < a.length; i++) {
  if (a[i] === userInput) {
    alert(userInput + " is available at index " + i + " in our bakery.");
    found = true;
    break;
  }
}

if (!found) {
  alert("We are sorry. " + userInput + " is not available in our bakery.");
}


var a = [24, 53, 78, 91, 12];

var largest = a[0];  

for (var i = 1; i < a.length; i++) {
  if (a[i] > largest) {
    largest = a[i];  
  }
}

console.log("The largest number is: " + largest);



var a = [24, 53, 78, 91, 12];

var smallest = a[0];  

for (var i = 1; i < a.length; i++) {
  if (a[i] < smallest) {
    smallest = a[i];  
  }
}

console.log("The smallest number is: " + smallest);


for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}