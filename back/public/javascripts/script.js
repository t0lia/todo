"use strict";

var uri = "http://localhost:8080/api";

var onget = function () {
    axios.get(uri + "/pets")
        .then(x => {
            updateUI(x);
        });
};

const updateUI = function (x) {
    document
        .getElementsByClassName("alltask")[0]
        .getElementsByClassName("container")[0]
        .innerHTML = JSON.stringify(x.data);
    let table = "<table><thead><tr><td>id</td><td>name</td></tr></thead><tbody>";
    x.data.forEach(line => table = table + "<tr><td>" + line.id + "</td><td>" + line.name + "</td></tr>");
    table = table + "</tbody></table>";
    document
        .getElementsByClassName("alltask")[0]
        .getElementsByClassName("container")[0]
        .innerHTML = table;
};

const oncreate = function (e) {

    const id = document.getElementById("createId").value;
    const name = document.getElementById("createName").value;
    const task = newTask(id, name);
    axios.post(uri + "/pets", task)
        .then(onget());
};

const ondelete = function (e) {
    const taskId = document.getElementById("deleteId").value;
    axios.delete(uri + "/pets/" + taskId)
        .then(onget());
};

const onupdate = function (e) {
    const id = document.getElementById("updateId").value;
    const name = document.getElementById("updateName").value;
    const task = newTask(id, name);
    axios.put(uri + "/pets", task)
        .then(onget());
};

const newTask = function (id, name) {
    return {
        id: id,
        name: name
    };
};
