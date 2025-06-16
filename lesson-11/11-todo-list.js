
const toDoList = []; //an array with no values, i.e empty array

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    toDoList.push(name);
    
    inputElement.value = '';

}