// const heading = document.getElementById(heading);
const btn = document.querySelector("#react-btn")
const para = document.querySelector("#status");



btn.addEventListener("click", function () {
    btn.textContent = "Clicked";
    document.body.style.backgroundColor = "green";
    para.textContent = "You clicked the button!"
})

btn.addEventListener("dblclick", function() {
    btn.textContent = "Double Clicked";
    document.body.style.backgroundColor = "red";
    para.textContent = "You double-clicked the button!";
})

btn.addEventListener("mouseover", function() {
    document.body.style.backgroundColor = "orange" ;
    para.textContent = "Hovering...";
})

btn.addEventListener("mouseout", function(){
    document.body.style.backgroundColor = 'blue';
    para.textContent = "Mouse left the button"
    btn.textContent = "Click Me!"
})