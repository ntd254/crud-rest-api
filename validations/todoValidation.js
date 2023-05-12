const Joi = require("joi");

const createTodo = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  completed: Joi.boolean()
});

const updateTodo = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  completed: Joi.boolean()
}).or("title", "description", "completed");

module.exports = {
  createTodo,
  updateTodo
};