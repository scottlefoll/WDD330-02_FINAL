// Two here for starters should be good as well...may add more later

/
do a querySelector lookup @param {string} selector The selector passed to querySelector
@return {element} The matching element or null if not found /
function qs(selector) { }
/
add a touchend event listener to an element for mobile with a click event fallback for desktops @param {string} elementSelector The selector for the element to attach the listener to
* @param {function} callback The callback function to run

*/
function onTouch(elementSelector, callback) { }





Description
In the Todo.js module, but not in the Todos class, create the following function
/* build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.

*/
function saveTodo(task, key) { }

A todo should look like this: { id : timestamp, content: string, completed: bool }



Add a Todos class to the Todos.js file, and make it the default export for the module

Description
in the constructor you should set a variable with the element our todo list will be built in, and the key we will use to 
read/write from localStorage










10. import helper functions into Todos.js, and Todos into main.js

12. Add a variable to store our list of tasks to the Todos.js module. todoList = null;


13. Create saveTodo(task, key)

    Description
    In the Todo.js module, but not in the Todos class, create the following function
    /* build a todo object, add it to the todoList, and save the new list to local storage.
    @param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.

    */
    function saveTodo(task, key) { }

    A todo should look like this: { id : timestamp, content: string, completed: bool }


14. Create getTodos(key) function

    Description
    In the Todos.js module, but not in the Todos class create the following function
    /* check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from 
    localstorage, update the local variable, and return it @param {string} key The key under which the value is stored under in 
    LS @return {array} The value as an array of objects
    */
    function getTodos(key) { }

15. in the todos class: 
    Complete Todos.addTodo()
    in list Backlog

    Spent: 0 (0 timer)
    Description
    Add a method to the Todos class called addTodo. It should grab the input in the html where users enter the text of the task, then send that along with the key to a 
    SaveTodo() function. Then update the display with the current list of tasks


17. Create the renderTodoList(list, element) function in todo.js

    Description
    /* foreach todo in list, build a li element for the todo, and append it to element
    @param {array} list The list of tasks to render to HTML @param {element} element The DOM element to insert our list elements into.

    */
    function renderTodoList(list, element) { }


18. Complete Todos.listTodos()
    
    Description
    Add a method to the Todos class called listTodos(). It should use the renderTodoList function to output our todo list when called.
    It should get called when a todo is added, or removed, and when the Todos class is instantiated.


19. Complete Todos.removeTodo() in todos.js


20. Complete Todos.removeTodo() in todos.js

21.  Complete Todos.filterTodos() in todos.js
