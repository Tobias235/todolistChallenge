import { useState, useEffect } from "react";
import FilterBtns from "./FilterBtns";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

import styles from "./TodoList.module.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [tab, setTab] = useState("All");

  useEffect(() => {
    let todolist = JSON.parse(localStorage.getItem("todos"));
    if (todolist) {
      setTodos(todolist);
    }
  }, []);
  return (
    <div className={styles.todoListContainer}>
      <FilterBtns tab={tab} setTab={setTab} />
      {tab !== "Completed" && <AddTodo todos={todos} setTodos={setTodos} />}
      <Todos todos={todos} tab={tab} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
