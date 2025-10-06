function checkAge(age) {
    if (age >= 18) {
        return "You are an adult";
    } else if (age < 18) {
        return "You are a minor";
    }
        
}

console.log(checkAge(20)); // Expected: "You are an adult"
console.log(checkAge(15)); // Expected: "You are a minor"
console.log(checkAge(18)); // Expected: "You are an adult"