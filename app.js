const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const taskInput = document.querySelector("#task");
const filterInput = document.querySelector("#filter");
const clearBtn = document.querySelector(".clear-tasks");

loadEventListeners();

function loadEventListeners(){
    //Add a task event
    form.addEventListener('submit', addTask);
    //Remove kebab
    taskList.addEventListener('click', removeTask);
    //clear all tasks
    clearBtn.addEventListener('click', clearTasks)
    //fitler tasks
    filterInput.addEventListener('keyup', filterTasks);
}

function addTask(event){
    //czech für emptei input
    if(taskInput.value === ''){
        alert('alert');
    }

    //create an element 2 add to da ul
    const li = document.createElement('li')
    //add a class name to da li element
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    //create a new anchor element
    const link = document.createElement('a');
    //add class to da element
    link.className = 'delete-item secondary-content';
    link.innerHTML = 'X';
    li.appendChild(link);
    taskList.appendChild(li);
    event.preventDefault();
}

function removeTask(event){
    if(event.target.classList.contains('delete-item')){
        if(confirm('Are you sure about that?')){
            if(confirm('Are you sure about that?')){
                if(confirm('Are you sure about that?')){
                    event.target.parentElement.remove();
                }
            }
        }
    }  
}

function clearTasks(){
    if(confirm('Are you sure about that?')){
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
    }
}

function filterTasks(event){
    const userFilter = event.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(userFilter) != -1){
            task.style.display = 'block'
        } else {
            task.style.display = 'none';
        }
    })
}