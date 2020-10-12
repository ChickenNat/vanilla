//selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//function
function addTodo(event){
    //Prevent from submit
    event.preventDefault();
    //to do div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //check mark
    const compleatedButton = document.createElement("button");
    compleatedButton.innerHTML = '<i class="fas fa-check"></i>';
    compleatedButton.classList.add("complete-btn");
    todoDiv.appendChild(compleatedButton);
        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //append to list
        todoList.appendChild(todoDiv);
        //Clear todo input value
        todoInput.value = "";
}


//delete check
function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //animatiom
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
        todo.remove();
        });
    }

//CHECK mark
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}