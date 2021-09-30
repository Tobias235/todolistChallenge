import { useState, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import AvailableTodos from "./AvailableTodos";
import InputContainer from "./InputContainer";

import styles from "./TodoList.module.css";

const todosLocal = "react-todo-list-todos";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem(todosLocal));
    if (localStorageTodos) {
      setTodos(localStorageTodos);
      setFilterTodos(localStorageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(todosLocal, JSON.stringify(todos));
    setFilterTodos(todos);
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
    localStorage.setItem(todosLocal, JSON.stringify(todos));
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const todosFilter = (e) => {
    const button = e.currentTarget.innerHTML;
    const localStorageTodos = JSON.parse(localStorage.getItem(todosLocal));
    if (button === "Active") {
      setFilterTodos(
        localStorageTodos.filter((todo) => todo.completed === false)
      );
    } else if (button === "Completed") {
      setFilterTodos(
        localStorageTodos.filter((todo) => todo.completed === true)
      );
    } else {
      setFilterTodos(localStorageTodos);
    }
  };

  return (
    <div className={styles.todoListContainer}>
      <ButtonContainer todosFilter={todosFilter} />
      <InputContainer addTodo={addTodo} />
      <AvailableTodos
        todos={filterTodos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default TodoList;
