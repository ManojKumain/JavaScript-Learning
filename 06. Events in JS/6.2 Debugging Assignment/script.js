const btn = document.querySelector("#react-btn");
const title = document.querySelector("#title");

btn.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow";
    title.textContent = "You clicked the button!";
});

btn.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = "white";
    title.textContent = "Reset!";
})

