const inputBox = document.getElementById("search");
const list = document.getElementById("list");

document.addEventListener("DOMContentLoaded", loadTasks); // Load tasks when the page is loaded

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveTasks(); 
    }
    inputBox.value = "";
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTasks(); 
    }
}, false);

function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML); 
}

function loadTasks() {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        list.innerHTML = savedTasks;
    }
}
