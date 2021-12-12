let todo_list = [];

function todoListFactory(title, description, dueDate, completion, project) {
    return {title, description, dueDate, completion, project};
}


function defaultTask() {
    todo_list[0] = todoListFactory('Work-life balance newsletter', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '25/12/2021', true, 'Prep Work');
    todo_list[1] = todoListFactory('Finalize event budget', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '25/01/2022', false, 'Foundational');
    todo_list[2] = todoListFactory('Finalize event agenda', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '08/02/2022', true, 'Foundational');
    todo_list[3] = todoListFactory('Determine event location', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '12/03/2022', false, 'Foundational');
    todo_list[4] = todoListFactory('Finalize hotel block for guests', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '01/04/2022', true, 'Travel');
    todo_list[5] = todoListFactory('Finalize conference travel plans', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '28/05/2022', false, 'Travel');
    todo_list[6] = todoListFactory('Book team travel', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '16/06/2022', true, 'Travel');
    todo_list[7] = todoListFactory('Reach out to caterers', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '14/07/2022', true, 'Vendors');
    todo_list[8] = todoListFactory('Reach out to pastry chefs', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '13/08/2022', false, 'Vendors');
    todo_list[9] = todoListFactory('Collect catering proposals', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', '24/09/2022', false, 'Vendors');
    console.log('first time visited');
}

export {todo_list, defaultTask, todoListFactory};