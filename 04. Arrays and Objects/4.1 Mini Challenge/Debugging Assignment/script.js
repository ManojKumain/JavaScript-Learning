const team = [
  { name: "Manoj", role: "Founder", experience: 5 },
  { name: "Asha", role: "Developer", experience: 3 },
  { name: "Rohan", role: "Designer", experience: 2 }
];

// Add new team member
team.push({name: "Kiran", role: "Intern", experience: 1});

console.log(team);

// Print all team members
for (const member of team) {
  console.log(member);
}

// Find the developer
const dev = team.find(member => member.role == "Developer");
console.log("Developer found:", dev.name);
