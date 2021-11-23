import { useState, useEffect } from "react";
import FilterBtns from "./FilterBtns";
import AvailableTodos from "./Todos";
import AddTodo from "./AddTodo";

import styles from "./TodoList.module.scss";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [tab, setTab] = useState("All");

  useEffect(() => {
    const todolist = JSON.parse(localStorage.getItem("todos"));
    if (todolist) {
      setTodos(todolist);
    }
  }, []);
  return (
    <div className={styles.todoListContainer}>
      <FilterBtns tab={tab} setTab={setTab} />
      {tab !== "Completed" && <AddTodo todos={todos} setTodos={setTodos} />}
      <AvailableTodos todos={todos} tab={tab} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
