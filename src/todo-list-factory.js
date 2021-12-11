let todo_list = [];

function todoListFactory(title, description, dueDate, completion, project) {
    return {title, description, dueDate, completion, project};
}

/*
function testFactory() {
    todo_list[0] = todoListFactory('testing', 'test description', '11/08/2012', true, 'Happy');
    todo_list[1] = todoListFactory('testing 222', 'Attack', '25/01/2025', false, 'sad');
    todo_list[2] = todoListFactory('testing 345', 'Fun', '08/12/2125', true, 'angry');
    todo_list[3] = todoListFactory('testing 345', 'Fun', '08/12/2125', false, 'angry');
    todo_list[4] = todoListFactory('testing 345', 'Fun', '08/12/2125', true, 'angry');
    todo_list[5] = todoListFactory('testing 345', 'Fun', '08/12/2125', false, 'Eat');
    todo_list[6] = todoListFactory('testing 345', 'Fun', '08/12/2125', true, 'Mouse');
    todo_list[7] = todoListFactory('testing 345', 'Fun', '08/12/2125', true, 'angry');
    todo_list[8] = todoListFactory('testing 345', 'Fun', '08/12/2125', false, 'sad');
    todo_list[9] = todoListFactory('testing 345', 'Fun', '08/12/2125', false, 'Star');
    todo_list[10] = todoListFactory('testing 345', 'Fun', '08/12/2125', true, 'Mouse');
    todo_list[11] = todoListFactory('testing 345', 'Fun', '08/12/2125', false, 'happy');
    todo_list[12] = todoListFactory('testing 345', 'Fun', '08/12/2125', true, 'Mouse');
    todo_list[13] = todoListFactory('testing 345', 'Fun', '08/12/2125', true, 'Mouse');
    todo_list[14] = todoListFactory('testing 345', 'Fun', '08/12/2125', false, 'Eat');
    console.log(todo_list[0]);
}
*/

export {todo_list, todoListFactory};