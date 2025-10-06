// Step 1: Create an array of 3 team members
const team = [
    { name: "Manoj", role: "developer", experience: 1},
    { name: "Madhav", role: "consultant", experience: 2},
    { name: "Rahul", role: "designer", experience: 5}
];

// Step 2: Add a new team member
team.push({name: "Rohit", role: "Backend developer", experience: 5});

// Step 3: Print details of the first team member
console.log("Name: ", team[0].name);
console.log("Name: ", team[0].role);

// Step 4: Print all team members
for(const member of team){
    console.log(member);
}


// Step 5: Find someone
console.log(team.find(member => member.role == "designer"))