function add(a, b) {
    return a + b;
} 

function subtract(a, b) {
    return a - b;
} 

function multiply(a, b) {
    return a * b;
} 

function calculator(a, b, operation) {
    if (operation === "add") {
        return add(a, b);
    } else if (operation === "subtract") {
        return subtract(a, b);
    } else if (operation === "multiply") {
        return multiply(a, b);
    } else {
        console.log("Invalid Operation")
    }
}

console.log(calculator(5, 3, "add"));
console.log(calculator(10, 4, "subtract"));
console.log(calculator(6, 7, "multiply"));

