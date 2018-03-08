const db = require("../models");

exports.index = (req, res) => {
    db.Todo.find({})
    .then(todos => res.json(todos))
    .catch(error => console.log(error));
};

exports.create = (req, res) => {
    db.Todo.create(req.body)
    .then(newTodo => res.json(newTodo))
    .catch(error => console.log(error));
};

exports.show = (req, res) => {
    db.Todo.findById(req.params.id)
    .then(foundTodo => res.json(foundTodo))
    .catch(error => console.log(error));
};

exports.update = (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(editedTodo => res.json(editedTodo))
    .catch(error => console.log(error));
};

exports.delete = (req, res) => {
    db.Todo.remove({_id: req.params.id})
    .then(deletedTodo => res.json(deletedTodo))
    .catch(error => console.log(error));
};

module.exports = exports;