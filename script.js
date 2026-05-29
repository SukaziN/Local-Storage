let button = document.getElementById("button");
let output = document.getElementById("output");
let tasks = [];

function addTask() {
  let userInput = document.getElementById("input").value;
  tasks.push(userInput);
  console.log(tasks);
  output.innerHTML = tasks;
}
button.addEventListener("click", addTask);
