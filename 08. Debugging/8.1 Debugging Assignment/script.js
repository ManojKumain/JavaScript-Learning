function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length - 1; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

const marks = [80, 70, 90];
console.log("Average Score:", calculateAverage(marks));
