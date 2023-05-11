require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todoRoute");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/todos", todoRouter);
app.get('/', (req, res) => {
  return res.send('Crud API with REST')
})
mongoose.connection.on("open", () => {
  app.listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`));
});