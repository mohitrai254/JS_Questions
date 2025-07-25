const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskDisplay = document.getElementById("task-display");
const deleteAllBtn = document.getElementById("deleteAll-btn");

let tasks = [];

addBtn.addEventListener("click", () => {
  let taskInputValue = taskInput.value.trim();
  if (taskInputValue !== "") {
    tasks.push(taskInputValue);
  }
  taskInput.value = "";
  renderTasks();
});
function renderTasks() {
  console.log(tasks);
  taskDisplay.innerHTML = "";
  tasks.map((el, index) => {
    const li = document.createElement("li");
    li.textContent = el + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(deleteBtn);
    taskDisplay.appendChild(li);
  });
}

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

deleteAllBtn.addEventListener("click", () => {
  console.log("CLicked");
  tasks = [];
  renderTasks();
});
