// const heading = document.getElementById(heading);
const btn = document.querySelector("#react-btn")
const para = document.querySelector("#status");

btn.addEventListener("click", function () {
    btn.textContent = "Clicked";
    document.body.style.backgroundColor = "green";
    para.textContent = "You clicked the button!"

})