const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./Models/Todo");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017");

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Sever is running on ${PORT}`);
});
