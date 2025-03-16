let todoList = [];
check();
function add(){
    let inputElement = document.querySelector('.todo-input');
    let inputText = inputElement.value; 

    let dateElement = document.querySelector('.todo-date');
    let inputDate = dateElement.value; 

    let timeElement = document.querySelector('.todo-time');
    let inputTime = timeElement.value; 

    let spanElement = document.querySelector('span');

    todoList.push({item : inputText , dueDate : inputDate , dueTime : inputTime});

    inputElement.value= '';
    dateElement.value = "";
    timeElement.value = "";
    spanElement.innerHTML= '' ;
    
    display()
}

function display(){
    let containerElement = document.querySelector('.show-container');
    let newHTMl = '';
    for(let i =0 ;i<todoList.length;i++){
        let {item,dueDate,dueTime} = todoList[i];
        newHTMl+=  `
        <span>${item}</span>
        <span>${dueDate}</span>
        <span>${dueTime}</span>
        <button class = "btn-del btn" onclick = "todoList.splice(${i},1); display(); check();">Delete</button>
        `
    }
    containerElement.innerHTML = newHTMl;

}

function check(){
    if(todoList.length == 0){
        let spanElement = document.querySelector('span');
        newHTMl =`
        <img src="images/No-Tasks.gif" alt="No-Tasks">
        <p class = "no-tasks-heading" >No Tasks to do...</p>
        `
    
        document.querySelector('span').innerHTML = newHTMl;
    
    }
}
