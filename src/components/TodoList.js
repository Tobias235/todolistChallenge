import { useState, useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import AvailableTodos from "./AvailableTodos";
import InputContainer from "./InputContainer";

import styles from "./TodoList.module.css";

const todosLocal = "react-todo-list-todos";

const TodoList = () => {
  const [completeIsActive, setCompleteIsActive] = useState(false);
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
    setCompleteIsActive(false);
  }, [todos]);

  const addTodo = (todo) => {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id, e) => {
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
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const removeTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const todosFilter = (e) => {
    const button = e.currentTarget.innerHTML;
    const localStorageTodos = JSON.parse(localStorage.getItem(todosLocal));
    if (button === "Active") {
      setCompleteIsActive(false);
      setFilterTodos(
        localStorageTodos.filter((todo) => todo.completed === false)
      );
    } else if (button === "Completed") {
      setCompleteIsActive(true);
      setFilterTodos(
        localStorageTodos.filter((todo) => todo.completed === true)
      );
    } else {
      setFilterTodos(localStorageTodos);
      setCompleteIsActive(false);
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
        removeTodos={removeTodos}
        completeActive={completeIsActive}
      />
    </div>
  );
};

export default TodoList;
