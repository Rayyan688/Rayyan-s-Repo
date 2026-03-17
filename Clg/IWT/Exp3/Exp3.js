function addTask() {

let input = document.getElementById("taskInput");

let task = input.value;

if (task === "") return;

let li = document.createElement("li");

li.innerHTML = task;

li.onclick = function () {
li.classList.toggle("completed");
};

let btn = document.createElement("button");

btn.innerHTML = "Done..🙌🏼";

btn.onclick = function () {
li.remove();
};

li.appendChild(btn);

document.getElementById("taskList").appendChild(li);

input.value = "";
}