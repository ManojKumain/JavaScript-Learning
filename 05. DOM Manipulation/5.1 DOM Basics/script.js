// 1. Accessing Element in DOM

// 1.1 By ID
const title = document.getElementById("title");
console.log(title);

// 1.2 By Class Name
const paragraphs = document.getElementsByClassName("text");
console.log(paragraphs)

// 1.3 By Query Selector (CSS-style)
const firstParagraph = document.querySelector(".text"); 
const allParagraphs = document.querySelectorAll(".text");
console.log(firstParagraph);
console.log(allParagraphs);



// 2. Changing Content or Style

// 2.1 Change text
title.textContent = "Welcome to JS DOM!";

// 2.2 Change HTML
// title.innerHTML = "<span style='color:red'>Hello!</span>"

// 2.3 Change style
title.style.color = "green";
title.style.fontSize = "40px";


// 3. Adding new elements
const newPara = document.createElement("p");
newPara.textContent = "I am a new paragraph!";
document.body.appendChild(newPara);



// 4. Removing Elements
title.remove();



// 5. Handle Events
const btn = document.getElementById("btn");
const message = document.getElementById("message");

btn.addEventListener("click", function() {
  message.textContent = "Button was clicked!";
});
