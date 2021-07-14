var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskFormEl = document.querySelector("#task-form")

function createTaskHandler(event) {
    event.preventDefault();
    
    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = "A new task has been added.";
    tasksToDoEl.appendChild(taskItemEl);
};

taskFormEl.addEventListener("submit", createTaskHandler);
