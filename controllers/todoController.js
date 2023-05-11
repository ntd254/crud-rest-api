const Todo = require("../models/Todo");

async function getAllTodos(req, res) {
  return res.status(200).json(await Todo.find());
}

async function createTodo(req, res) {
  const newTodo = await Todo.create({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed
  });
  return res.status(201).json(newTodo);
}

async function updateTodo(req, res) {
  const todo = await Todo.findOne({_id: req.params.id});
  if (!todo) {
    return res.status(400).json({message: "Todo not found"});
  } else {
    todo.title = req.body.title;
    todo.description = req.body.description;
    todo.completed = req.body.completed;
    return res.status(200).json(await todo.save());
  }
}

async function deleteTodo(req, res) {
  const todo = await Todo.findOne({_id: req.params.id});
  if (!todo) {
    return res.status(400).json({message: "Todo not found"});
  } else {
    const {deletedCount} = await Todo.deleteOne({_id: todo._id});
    return res.status(200).json({message: `${deletedCount} todo deleted`});
  }
}

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
};