const TaskService = {};
let data = [{id: 1, "value": "do something"}, {id: 2, "value": "do something more"}];
let index = 2;

TaskService.generateId = function () {
    index += 1;
    return index;
};

TaskService.getAll = function () {
    return data;
};

TaskService.get = function (i) {
    const id = parseInt(i);
    return data.filter(task => task.id === id)[0];
};

TaskService.create = function (task) {
    task.id = this.generateId();
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
    value.value = task.value;
    return value;
};
module.exports = TaskService;
