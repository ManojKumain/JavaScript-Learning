🧩 Debugging Assignment: "The Buggy Team"

Below is some JavaScript code that tries to print details about a team —
but it has 4 mistakes 🐛.

Your task:
👉 Find and fix the mistakes so the code runs correctly and prints each team member’s details.

❌ Buggy Code:
const team = [
  { name: "Manoj", role: "Founder", experience: 5 },
  { name: "Asha", role: "Developer", experience: 3 },
  { name: "Rohan", role: "Designer", experience: 2 }
];

// Add new team member
team.push{name: "Kiran", role: "Intern", experience: 1};

// Print all team members
for (let i in team) {
  console.log("Name:" + team.name + ", Role:" + team.role + ", Experience:" + team.experience);
}

// Find the developer
const dev = team.find(member => member.role = "Developer");
console.log("Developer found:", dev.name);