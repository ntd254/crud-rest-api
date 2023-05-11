const {model, Schema} = require("mongoose");

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = model("Todo", todoSchema);