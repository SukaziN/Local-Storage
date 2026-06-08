localStorage.setItem("username", "JaneDoe");
let username = localStorage.getItem("username");
console.log(username);

let button = document.getElementById("button");
let output = document.getElementById("output");
let tasks = [];

function addTask() {
  let userInput = document.getElementById("input").value;
  localStorage.setItem("list", userInput);
  userInput = localStorage.getItem("list");
  if (localStorage.getItem("list")) {
    document.getElementById("output").innerHTML = localStorage.getItem("list");
  } else {
    console.log("I don't remember that!");
  }
}
button.addEventListener("click", addTask);
