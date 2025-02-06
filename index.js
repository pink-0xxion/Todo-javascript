// with display.innerHTML += `<li class="list">${task.value}</li>` and custom toggle

const task = document.querySelector(".task");
const addTask = document.querySelector(".add-btn");
const display = document.querySelector(".display");


let toggle = false;

function strick(lists) {
    lists.addEventListener("click", () => {

        if(!toggle) {
            lists.classList.add("strick");
        } else {
            lists.classList.remove("strick");
        }
        toggle = !toggle;
    });
}


addTask.addEventListener("click", () => {
   

    display.innerHTML += `<li class="list">${task.value}</li>`;
    const lists = document.querySelectorAll(".list");
    strick(lists[lists.length - 1]);

    task.value = "";
});

// Becarefull on orders
