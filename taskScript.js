const addTaskBtn = document.getElementById("add-task-button");
const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");

let tasks = !localStorage.tasks ? [] : JSON.parse(localStorage.getItem("tasks"));

let taskItemElems = [];

function Task(text) {
    this.text = text;
    this.completed = false;
}

const createTask = (task, index) => {
    return `
        <li class="task-item" ${task.completed ? "checked" : ""}>
            <input onclick="completeTask(${index})" type="checkbox" class="check" ${task.completed ? "checked" : ""}/>
            <span class="task">${task.text}</span>
            <button class="delete-btn" onclick= "deleteTask(${index})"></button>
        </li>
    `
}

const sortTasks = () => {
    const activeTasks = tasks.length && tasks.filter(item => !item.completed);
    const completedTasks = tasks.length && tasks.filter(item => item.completed);
    tasks = [...activeTasks, ...completedTasks];
}

const fillList = () => {
    taskList.innerHTML = "";
    if (tasks.length > 0) {
        sortTasks();
        tasks.forEach((item, index) => {
            taskList.innerHTML += createTask(item, index);
        });
        taskItemElems = document.querySelectorAll(".task-item")
    }
}

fillList();

const updateLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const completeTask = index => {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
        taskItemElems[index].classList.add("checked");
    } else {
        taskItemElems[index].classList.remove("checked");
    }
    updateLocal();
    fillList();
}

addTaskBtn.addEventListener("click", event => {
    event.preventDefault();
    tasks.push(new Task(inputTask.value));
    updateLocal();
    fillList();
    inputTask.value = "";
})

const deleteTask = index => {
    tasks.splice(index, 1);
    updateLocal();
    fillList();
}