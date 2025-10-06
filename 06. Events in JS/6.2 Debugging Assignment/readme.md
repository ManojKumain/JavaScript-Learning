🧩 Debugging Assignment: “Buggy Button Reaction”

This code should do the following:
- When you click the button → change text and background
- When you double-click → reset it back

…but there are 3 subtle mistakes 👀
Your task: find and fix them so it works as intended.

❌ Buggy Code

<h1 id="title">Debug This Button!</h1>
<button id="react-btn">Click Me</button>

<script>
const btn = document.querySelector("react-btn");
const title = document.getElementByID("title");

btn.addlistener("click", function() {
    document.body.style.backgroundcolor = "yellow";
    title.text = "You clicked the button!";
});

btn.addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "white";
    title.textContent = "Reset!";
});
</script>


🎯 Your Tasks

1. Fix all the mistakes so:
-> The button click changes background to yellow
-> The double click resets the background to white
-> The <h1> text updates correctly each time

2.Make sure you understand why each bug happened — this is key.

💡 Hints
-> Check selectors — are the IDs referenced properly?
-> Check method names (addlistener, getElementByID, etc.)
-> CSS property names are case-sensitive too.