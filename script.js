const inputField = document.querySelector('.input-field textarea');
const listContainer = document.querySelector('.todoLists');
const pendingNum = document.querySelector('.pending-num');
const clearBtn = document.querySelector('.clear-button');
let numTask = listContainer.childElementCount;


function allTask(){
    let task = document.querySelector('.pending');
    pendingNum.innerHTML = numTask;
}

inputField.addEventListener('keyup', (e) => {
    let inputValue = inputField.value.trim();
    if(e.key === 'Enter' && inputValue.length > 0) {
        let newTodo = `<li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputValue}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`
        listContainer.insertAdjacentHTML("afterbegin", newTodo);
        inputField.value = '';
        numTask += 1;
        allTask();
    }

})

function handleStatus(e){
    e.addEventListener('click', () => {
        const checkbox = e.querySelector("input");
        checkbox.checked =  checkbox.checked ? false : true;
        e.classList.toggle("pending");
        allTask();
    })
}

function deleteTask(e){
    e.parentElement.remove();
    allTask();
    numTask -= 1;
}

clearBtn.addEventListener('click', () => {
    listContainer.innerHTML = '';
    allTask();
    return numTask = 0;
})