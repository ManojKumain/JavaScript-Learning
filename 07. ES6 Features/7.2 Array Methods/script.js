// Array Methods: forEach(), map(), filter().

// forEach() -> Just loop through array elements
let fruits = ["apple", "banana", "mango"];
fruits.forEach(function (fruit) {
    console.log(fruit);
});
// Use: when you just want to do something for each item (but not return anything).



// map() -> Transform each element and return a new array
let numbers = [1, 2, 3]
let squares = numbers.map(function (num) {
    return num * num;
})
console.log(squares);



// filter() -> Keep only elements that match a condition
let ages = [15,22,30,12,18];
let adults = ages.filter(function(age) {
    return age >= 18;
})
console.log(adults);