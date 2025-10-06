const title = document.getElementById("title");
const message = document.getElementById("message");
const btn = document.getElementById("btn-change");

btn.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
    title.style.color = "red";
    title.style.fontSize = "60px";
    message.textContent = "Background changed to yellow and title styled!";
});