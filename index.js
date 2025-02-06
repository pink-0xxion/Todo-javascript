// with const listItem = document.createElement("li") and toggle 

const task = document.querySelector(".task");
const addTask = document.querySelector(".add-btn");
const display = document.querySelector(".display");



function strick(lists) {
    lists.addEventListener("click", () => {
            lists.classList.toggle("strick");
    });
}


addTask.addEventListener("click", () => {
    if (task.value.trim() === "") return; // Prevent adding empty tasks
   
    const listItem = document.createElement("li");
    listItem.classList.add("list");
    listItem.textContent = task.value;
    display.appendChild(listItem);

    strick(listItem);

    task.value = "";
});


// Becarefull on orders
