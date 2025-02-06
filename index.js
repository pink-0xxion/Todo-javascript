// delete, update features

const task = document.querySelector(".task");
const addTask = document.querySelector(".add-btn");
const display = document.querySelector(".display");

let listTask = [];


function strick() {
    const lists = document.querySelectorAll(".list");

    for (let i = 0; i < lists.length; i++) {
        lists[i].addEventListener("click", function () {
            this.classList.toggle("strick");
        });
    }

}

function deleteList() {
    const task = document.querySelectorAll(".delete-btn");
    console.log(task);

    for (let i = 0; i < task.length; i++) {
        task[i].addEventListener("click", function () {
            // this.classList.toggle("strick");
            console.log("delete funcion is called");
            // listTask.pop(this);
            console.log(this);
            // listTask.splice(2, 3)
            // console.log(listTask);
        });
    }
}


addTask.addEventListener("click", () => {
    if (task.value.trim() === "") return; // Prevent adding empty tasks
    display.innerHTML = ""; // Clear previous tasks before rendering
    listTask.push(task.value);
    console.log(listTask);

    // display.innerHTML += listTask.map((task) => {
    //     return `<li class="list">${task}</li>`;
    // }
    // );

    listTask.map((task, index) => {
        display.innerHTML += `<div class="new-task">
                                <li class="list">${task}</li>
                                <button index="${index}" class="delete-btn">Delete</button>
                             </div>`; // index="${index}": This can help with future features like removing/editing tasks.

        deleteList();

    }
    );

    strick();
    task.value = "";
});

/*
Incorrect use of this inside strick()
    -> Arrow functions (() => {}) do not bind this, so this inside the event listener does not refer to the clicked list item.
    -> Solution: Use a normal function (function () {}) so that this refers to the clicked element.

strick() only targets the last .list, not all
    -> You're using lists[lists.length - 1], but when display.innerHTML is cleared, the previous elements are gone.
    -> Solution: Loop over all .list elements instead.
 */


// Becarefull on orders

