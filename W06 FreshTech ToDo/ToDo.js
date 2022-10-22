// Array to hold the ToDo items
let todoItems = [];

// This function is called when the user clicks on a To Do item, and it toggles the checked
function renderTodo(todo) {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
    
    const list = document.querySelector('.js-todo-list');
    const item = document.querySelector(`[data-key='${todo.id}']`);

    if (todo.deleted) {
        item.remove();
        if (todoItems.length === 0) list.innerHTML = '';
        return
    }

    // if the item is checked, mark it 'done'
    const isChecked = todo.checked ? 'done' : '';
    // create a new list item
    const node = document.createElement("li");
    // set the class of the list item
    node.setAttribute('class', `todo-item ${isChecked}`);
    // set the data-key of the list item
    node.setAttribute('data-key', todo.id);

    // create the HTML for the list item
    node.innerHTML = `
        <input id="${todo.id}" type="checkbox"/>
        <label for="${todo.id}" class="tick js-tick"></label>
        <span>${todo.text}</span>
        <button class="delete-todo js-delete-todo">
        <svg><use href="#delete-icon"></use></svg>
        </button>
        `;

    // if the item exists replace it, otherwise add the list item to the list
    if (item) {
        list.replaceChild(node, item);
    } else {
        list.append(node);
    }
}

// This function is called when the user enters text into the ToDo text area, and 
// hits the enter key.  It creates a new ToDo item, and adds it to the todoItems array.
// ?? It then calls the renderTodo function to display the new ToDo item.
function addTodo(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now(),
    };
    todoItems.push(todo);
    // console.log(todoItems);
    renderTodo(todo);
}

// This function is called when the user clicks on a To Do item, and it toggles the checked
function toggleDone(key) {
    // find the index of the item in the array
    const index = todoItems.findIndex(item => item.id === Number(key));
    // toggle the checked value of the item
    todoItems[index].checked = !todoItems[index].checked;
    // display the updated ToDo list
    renderTodo(todoItems[index]);
}

// This function is called when the user clicks on the delete button for a ToDo item
function deleteTodo(key) {
    // find the index of the item in the array
    const index = todoItems.findIndex(item => item.id === Number(key));
    // create a new object with the deleted property set to true
    const todo = {
        deleted: true,
        ...todoItems[index]
    }
    // replace the item in the array with the new object
    todoItems = todoItems.filter(item => item.id !== Number(key));
    // display the updated ToDo list
    renderTodo(todo);
}


// select the form and add an event listener
const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    // stop the browser from reloading the page
    event.preventDefault();
    // select input element
    const input = document.querySelector('.js-todo-input');

    // get the text from the input element and trim item
    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
});

// This function is called when the user clicks on a To Do item, and it toggles the checked status
const list = document.querySelector('.js-todo-list');
// add an event listener to the list
list.addEventListener('click', event => {
    // if the user clicks on a To Do item, then toggle its 'checked' status
    // alert("You clicked on a ToDo item");
    if (event.target.classList.contains('js-tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
    if (event.target.classList.contains('js-delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});

// function to load the ToDo items from local storage
document.addEventListener('DOMContentLoaded', () => {
    // get the ToDo items from local storage
    const ref = localStorage.getItem('todoItems');
    // if there are ToDo items in local storage, then 
    // parse them and add them to the todoItems array
    if (ref) {
      todoItems = JSON.parse(ref);
      todoItems.forEach(t => {
        renderTodo(t);
      });
    }
  });

// function to filter the ToDo items to display 'all', 'active', or 'completed' items
function filterTodos( filter ) {
    // get the ToDo items from local storage
    const list = document.querySelector('.js-todo-list');    // 
    const items = list.querySelectorAll('.todo-item');
    // for each item, display it if it matches the filter
    items.forEach(item => {
        switch (filter) {
            case 'all':
                item.style.display = 'flex';
                break;
            case 'active':
                if (item.classList.contains('done')) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'flex';
                }
                break;
            case 'completed':
                if (item.classList.contains('done')) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
                break;
        }
    });
}



//   const searchTerm = document.querySelector('.js-filter-todo').value.toLowerCase();
//   const filteredTodos = todoItems.filter(todo => {
//     return todo.text.toLowerCase().includes(searchTerm);
//   });
//   document.querySelector('.js-todo-list').innerHTML = '';
//   filteredTodos.forEach(t => {
//     renderTodo(t);
//   });