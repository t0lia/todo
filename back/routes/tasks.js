var express = require('express');
var router = express.Router();
var taskService = require('../services/TaskService');

router.get('/', function (req, res) {
    res.send(taskService.getAll());
});

router.get('/:taskId', function (req, res) {
    const id = parseInt(req.params.taskId);
    res.send(taskService.get(id));
});

router.delete('/:taskId', function (req, res) {
    const id = parseInt(req.params.taskId);
    res.send(taskService.delete(id));
});

router.post('/', function (req, res) {
    console.log(req.body);
    res.send(taskService.create(req.body));
});

router.put('/', function (req, res) {
    console.log(req);
    res.send(taskService.update(req.body));
});

module.exports = router;
