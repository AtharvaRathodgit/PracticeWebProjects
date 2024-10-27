let TaskList = document.getElementsByClassName('taskList')[0];
let InputTask = document.getElementsByClassName('newTask')[0];
let addBTN = document.getElementsByClassName('AddBtn')[0];
let DeleteAllBtn = document.getElementsByClassName('deleteAll')[0];

function addNewTask() {
    if (InputTask.value === '') {
        alert("Define New Task");
    }
    else {
        let NewTask = document.createElement('li');
        NewTask.innerHTML = InputTask.value;
        TaskList.appendChild(NewTask);
        NewTask.classList.add('tasks');

        let closeIco = document.createElement('span');
        closeIco.innerHTML = '<img src="SVGs/close.svg" alt="close icon" style="width: 25px; height: 25px;">';

        NewTask.appendChild(closeIco);
    }
    InputTask.value = "";
    storeData();
}

addBTN.addEventListener('click', addNewTask);

InputTask.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (InputTask.value === '') {
            return;
        }
        else {
            addNewTask();
            InputTask.value = '';
            storeData();
        }
    }
});

TaskList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checkedTask');
        storeData();
    }
    else if (e.target.tagName === 'IMG') {
        e.target.parentElement.parentElement.remove();
        storeData();
    }
}, false)

DeleteAllBtn.addEventListener('click', function (e) {
    TaskList.innerHTML = '';
    storeData();
})


function storeData() {
    let theData = TaskList.innerHTML;

    localStorage.setItem("ListData", theData);
}

function loadListData() {
    let theData = localStorage.getItem('ListData');

    if (theData) {
        TaskList.innerHTML = theData;
    }
}

window.onload = loadListData();