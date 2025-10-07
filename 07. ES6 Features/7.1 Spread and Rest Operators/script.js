// Spread Operator -> Used to expand arrays or objects into individual elements.

// Example 1: Copying and merging arrays without loops.
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

// Example 2: Copying Objects
let user = {
    name: "Manoj",
    age: 25
}
let updatedUser = { ...user, city: "Banglore" };
console.log(updatedUser);


// Rest Operator -> Used in function parameters to collect multiple arguments into an array.

// Example:
function sum(...numbers) {
    console.log(numbers);
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(2, 4, 6, 8));
