const Todo = require("../models/Todo");
const todoValidation = require("../validations/todoValidation");

async function getAllTodos(req, res, next) {
  try {
    return res.status(200).json(await Todo.find());
  } catch (e) {
    next(e);
  }
}

async function createTodo(req, res, next) {
  try {
    const {value, error} = todoValidation.createTodo.validate(req.body);
    if (error) {
      return res.status(400).json({message: error.details.map(error => error.message).join(', ')});
    }
    const newTodo = await Todo.create(value);
    return res.status(201).json(newTodo);
  } catch (e) {
    next(e);
  }
}

async function updateTodo(req, res, next) {
  try {
    const todo = await Todo.findOne({_id: req.params.id});
    if (!todo) {
      return res.status(400).json({message: "Todo not found"});
    }
    const {value, error} = todoValidation.updateTodo.validate(req.body);
    if (error) {
      return res.status(400).json({message: error.details.map(error => error.message).join(', ')});
    }
    Object.entries(value).forEach(([key, value]) => todo[key] = value);
    return res.status(200).json(await todo.save());
  } catch (e) {
    next(e);
  }
}

async function deleteTodo(req, res, next) {
  try {
    const todo = await Todo.findOne({_id: req.params.id});
    if (!todo) {
      return res.status(400).json({message: "Todo not found"});
    } else {
      const {deletedCount} = await Todo.deleteOne({_id: todo._id});
      return res.status(200).json({message: `${deletedCount} todo deleted`});
    }
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
};