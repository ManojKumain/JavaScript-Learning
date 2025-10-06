// For Shorter Syntax used arrow functions:
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;


// Used switch for cleaner logic
function calculator(a, b, operation) {
    switch(operation) {
        case "add": return add(a, b);
        case "subtract": return subtract(a, b);
        case "multiply": return multiply(a, b);
        default: return "Invalid Operation";
    }
}

console.log(calculator(5, 3, "add"));
console.log(calculator(10, 4, "subtract"));
console.log(calculator(6, 7, "multiply"));

