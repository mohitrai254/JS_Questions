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

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = el;

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";

      // When Save is clicked
      saveBtn.addEventListener("click", () => {
        const updatedValue = input.value.trim();
        if (updatedValue !== "") {
          tasks[index] = updatedValue;
          renderTasks();
        }
      });

      // Clear existing elements and show input + save
      li.innerHTML = "";
      li.appendChild(input);
      li.appendChild(saveBtn);
    });
    li.appendChild(editBtn);

    taskDisplay.appendChild(li);
  });
}

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

deleteAllBtn.addEventListener("click", () => {
  console.log("Clicked");
  tasks = [];
  renderTasks();
});
