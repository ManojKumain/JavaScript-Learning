const title = document.querySelector("#title");
const btn = document.querySelector("#btn");
const message = document.querySelector("#message");



btn.addEventListener("click", function () {
    const bgColorChange = document.body.style.backgroundColor = "red";
    message.textContent = `Current Color: ${bgColorChange}`;
    title.style.color = "white";
    title.style.fontSize = "60px";

});