import { useState } from "react";

import styles from "./InputContainer.module.css";
import Buttons from "./Buttons";

const InputContainer = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: Math.random().toString() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <input
        id="inputText"
        className={styles.input}
        type="text"
        placeholder="Add Details"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Buttons type="submit" className={styles.inputBtn}>
        Add
      </Buttons>
    </form>
  );
};

export default InputContainer;
