import { useEffect, useRef } from "react";

import styles from "./AddTodo.module.scss";

const InputContainer = ({ todos, setTodos }) => {
  const inputVal = useRef();
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputVal.current.value.trim() === "") {
      return;
    }
    setTodos([
      ...todos,
      { id: Math.random(), task: inputVal.current.value, completed: false },
    ]);
    inputVal.current.value = "";
  };

  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  return (
    <form className={styles.inputContainer} onSubmit={handleAddTodo}>
      <input
        id="inputText"
        type="text"
        placeholder="Add Details"
        autoFocus
        ref={inputVal}
      />
      <button type="submit" onSubmit={handleAddTodo}>
        Add
      </button>
    </form>
  );
};

export default InputContainer;
