const router = require("express").Router();
const todoController = require("../controllers/todoController");

router.route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

router.route("/:id")
  .put(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;