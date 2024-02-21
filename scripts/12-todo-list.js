/*
1. create array to store todos
2. when we click "add",
get text from textbox
add to array 
console log the array
*/

// document.getElementById("enterKey").addEventListener("keydown", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Trigger the button element with a click
//     document.getElementById("enterKey").click();
//   }
// });

const todoList = [{
  name: 'item 1', 
  dueDate: '2023-01-05'
}, {
 name: 'item 2',
 dueDate: '2023-01-05'
}];
function addTodo() {
  // this gets an element with the class js-name-input
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name, 
    // dueDate: dueDate
    name,
    dueDate
  })
  inputElement.value = '';
  renderTodoList()
}

/*
1. loop through array
2. create HTML code for each todo 
3. put HTML on web page
*/

renderTodoList(); 

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    // destructing 
    const { name } = todoObject;
    const { dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${index},1);
      renderTodoList();
    " class="delete-todo-button">Delete</button> 
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
