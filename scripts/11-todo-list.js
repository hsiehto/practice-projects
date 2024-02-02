/*
1. create array to store todos
2. when we click "add",
get text from textbox
add to array 
console log the array
*/
const todolist = [];
function addTodo() {
  // this gets an element with the class js-name-input
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todolist.push(name)
  inputElement.value = '';
  console.log(todolist);
}