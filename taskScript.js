document.getElementById("new-task").addEventListener("submit", function(e) {
    e.preventDefault();
});

document.getElementById("add-task-button").addEventListener("click", function () {
    let text = document.getElementById("input-task").value;
    document.getElementById("input-task").value = "";
    let ul = document.getElementById("task-list");
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("class", "check");
    let span = document.createElement("span");
    span.setAttribute("class", "task");
    span.textContent = text;
    let button = document.createElement("button");
    button.setAttribute("class", "delete-btn");
    button.setAttribute("onclick", "return this.parentNode.remove();");
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
});