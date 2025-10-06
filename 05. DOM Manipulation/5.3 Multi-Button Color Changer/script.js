const title = document.querySelector("#title");
const message = document.querySelector("#message");
const btnBg = document.querySelector("#btn-bg");
const btnH1 = document.querySelector("#btn-h1");
const btnAll = document.querySelector("#btn-all");

btnBg.addEventListener("click", function () {
    const bgColor = document.body.style.backgroundColor = "blue";
    message.textContent = `Color changed to: ${bgColor}`;
});

btnH1.addEventListener("click", function () {
    title.style.color = "white";
    title.style.fontSize = "50px";
    message.textContent = `title color changed to: ${title.style.color} and title font size changed to: ${title.style.fontSize}`;
});

btnAll.addEventListener("click", function () {
    const bgColor = document.body.style.backgroundColor = "black";
    title.style.color = "white";
    message.style.color = "white";
    message.textContent = `background color changed to ${bgColor} and
    title color changed to ${title.style.color}`
});


