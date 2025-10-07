const addBtn = document.querySelector("#addBtn");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    taskList.appendChild(li);
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function() {
        
        li.remove();
    });
    taskInput.value = "";
})