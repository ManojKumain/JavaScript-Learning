const students = [
  { name: "Manoj", marks: [80, 75, 90] },
  { name: "Priya", marks: [60, 70, 65] },
  { name: "Rahul", marks: [88, 92, 79] }
];

// Step 1: Calculate average marks
const averages = students.map(student => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / student.marks.length;
  return { name: student.name, average: average };
});

// Step 2: Filter top students
const topStudents = averages.filter(student => student.average > 75);

// Step 3: Print results
topStudents.forEach(student => {
  console.log(`🎓 ${student.name} scored an average of ${student.average.toFixed(2)}. Great job!`);
});

// Step 4: Add a new student using spread
const newStudent = { name: "Sneha", marks: [90, 85, 95] };
const updatedStudents = [...students, newStudent];
console.log(updatedStudents);

// Step 5: Use rest operator
function calculateTotal(...marks) {
  return marks.reduce((sum, mark) => sum + mark, 0);
}
console.log(calculateTotal(10, 20, 30, 40)); // Output: 100
