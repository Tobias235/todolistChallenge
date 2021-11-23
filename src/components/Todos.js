import { useEffect, useState } from "react";
import styles from "./Todos.module.scss";
import DeleteBtn from "./DeleteBtn";
const AvailableTodos = ({ todos, setTodos, tab }) => {
  const [filter, setFilter] = useState([]);
  const handleCheckboxClick = (e) => {
    const id = Number(e.currentTarget.getAttribute("value"));
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
  };

  const handleRemoveTodo = (e) => {
    const id = Number(
      e.currentTarget.parentElement.parentElement.getAttribute("value")
    );
    let result;
    if (e.target.innerHTML !== "Delete All") {
      result = todos.filter((todo) => todo.id !== id);
    } else {
      result = todos.filter((todo) => !todo.completed);
    }
    localStorage.setItem("todos", JSON.stringify(result));
    setTodos(result);
  };

  useEffect(() => {
    const todoFilter = () => {
      if (tab === "Active") {
        setFilter(todos.filter((todo) => todo.completed === false));
      } else if (tab === "Completed") {
        setFilter(todos.filter((todo) => todo.completed === true));
      } else {
        setFilter(todos);
      }
    };
    todoFilter();
  }, [tab, todos]);

  return (
    <div className={styles.todos}>
      {filter.map((todo) => (
        <div
          className={styles.todoContainer}
          value={todo.id}
          key={todo.id}
          checked={todo.completed}
        >
          <input
            type="checkbox"
            value={todo.id}
            onClick={handleCheckboxClick}
            defaultChecked={todo.completed}
          />
          <p className={todo.completed ? styles.checked : null}>{todo.task}</p>
          {tab === "Completed" && (
            <div>
              <span className="material-icons" onClick={handleRemoveTodo}>
                delete_outline
              </span>
            </div>
          )}
        </div>
      ))}
      {tab === "Completed" && <DeleteBtn onClick={handleRemoveTodo} />}
    </div>
  );
};

export default AvailableTodos;
