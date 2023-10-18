const express = require("express");
const todo = require("../controllers/todo");
const catchAsync = require("../utils/catchAsync");
const router = express.Router();

router.route("/list").post(catchAsync(todo.getAllTodo));

router.route("/add").post(catchAsync(todo.addItem));

router.route("/edit").post(catchAsync(todo.editItem));

router.route("/delete").post(catchAsync(todo.deleteItem));

module.exports = router;
