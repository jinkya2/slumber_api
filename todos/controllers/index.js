const pool = require("../../helpers/db");

/**
     * @route POST api/users
     * @desc blahblah
     * @access public
     * @returns 
     */
const createTodo = async (req, res) => {
  try {
    console.log('create a todo');
    console.log(req.body);
    const { user_name,task_description, task_status } = req.body;
    const newTodo = await pool.query(
      `INSERT INTO TODO_V1 (todo_date, user_name, todo_task, todo_status) VALUES(to_timestamp(${Date.now()}/1000), $1, $2, $3) RETURNING *`,
      [user_name,task_description, task_status]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Internal Server Error", payload: error});
  }
};

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM TODO_V1");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error);
  }
};

const updateAtodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id=$2",
      [description, id]
    );
    res.json("todo was updated");
  } catch (error) {
    console.log(error);
  }
};

const deleteAtodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = {
    createTodo,
    getAllTodos,
    updateAtodo,
    deleteAtodo
}