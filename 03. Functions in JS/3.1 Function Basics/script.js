// Step 1: Create Simple Functions

function sayHi() {
    console.log("Manoj this side!");
}

sayHi();
sayHi();
sayHi();



// Step 2: Add Input and Outputs
function showAge(age) {
    return `Hello, Manoj you are ${age} years old`;
}

console.log(showAge(26));

// Write a function to show name and age
function showNameAndAge(name,age) {
    return `Hi, ${name} you are ${age} years old`;
}

console.log(showNameAndAge("Manoj", 26));



// Step 3: Combine Two Functions

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function totalPower(level, multiplier) {
    let sum = add(level, 10);
    return multiply(sum, multiplier);
}

console.log(totalPower(5, 2));




