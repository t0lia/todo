const TaskService = {};
let data = [{id: 1, "name": "do something"}, {id: 2, "name": "do something more"}];

TaskService.getAll = function () {
    return data;
};

TaskService.get = function (i) {
    const id = parseInt(i);
    return data.filter(task => task.id === id)[0];
};

TaskService.create = function (task) {
    task.id = parseInt(task.id);
    data.push(task);
    return task;
};

TaskService.delete = function (i) {
    const id = parseInt(i);
    const task = data.filter(task => task.id === id)[0];
    data = data.filter(task => task.id !== id);
    return task;
};

TaskService.update = function (task) {
    task.id = parseInt(task.id);
    let value = data.filter(t => t.id === task.id)[0];
    value.name = task.name;
    return value;
};
module.exports = TaskService;
