const Todo = require("../models/todo");
const { v4: uuidv4 } = require('uuid');

module.exports.addItem = async (req, res, next) => {
    try {
        const { username, title, content } = req.body;
        await Todo.create({id: uuidv4(), user: username, title: title, content: content});
        const data = {
            message: "SUCCESS",
            status: 200
        };
        res.json(data);
    }catch(e) {
        const data = {
            message: e,
            status: 500
        }
        res.json(data);
    }
}

module.exports.editItem = async (req, res, next) => {
    try {
        const { id, title, content } = req.body;
        await Todo.update({title: title, content: content}, {where: {id: id}});
        const data = {
            message: "SUCCESS",
            status: 200
        };
        res.json(data);
    }catch(e) {
        const data = {
            message: e,
            status: 500
        }
        res.json(data);
    }
}

module.exports.deleteItem = async (req, res, next) => {
    try {
        const { id } = req.body;
        await Todo.destroy({where: {id: id}});
        const data = {
            message: "SUCCESS",
            data: todo,
            status: 200
        };
        res.json(data);
    }catch(e) {
        const data = {
            message: e,
            status: 500
        }
        res.json(data);
    }
}

module.exports.getAllTodo = async (req, res, next) => {
    try {
        const { username } = req.body;
        const todos = await Todo.findAll({
            where: {
                user: username
              }
            });
        const data = {
            data: todos,
            status: 200
        };
        res.json(data);
    }catch(e) {
        const data = {
            message: e,
            status: 500
        }
        res.json(data);
    }
}

