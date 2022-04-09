/** Contain api routes of the application */

//const { Router } = require("express");
//const router = Router();

const {
  createTodo,
  getAllTodos,
  updateAtodo,
  deleteAtodo,
} = require("./controllers/index");

exports.routesConfig = function (app){
    app.get("/todos", getAllTodos);
    app.post("/todos", createTodo);
    app.put("/todos/:id", updateAtodo);
    app.delete("/todos/:id", deleteAtodo);
}