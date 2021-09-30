import styles from "./AvailableTodos.module.css";

const AvailableTodos = ({ todos, toggleComplete, removeTodo }) => {
  function handleCheckboxClick(e) {
    const id = e.currentTarget.getAttribute("value");
    toggleComplete(id);
  }

  function handleRemoveClick(e) {
    const id =
      e.currentTarget.parentElement.parentElement.getAttribute("value");
    removeTodo(id);
  }

  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <div
          className={styles.todoContainer}
          value={todo.id}
          key={todo.id}
          checked={todo.completed}
        >
          <input
            type="checkbox"
            onClick={handleCheckboxClick}
            value={todo.id}
            defaultChecked={todo.completed}
          />
          <p
            style={{
              textDecoration: todo.completed ? "line-through" : null,
            }}
          >
            {todo.task}
          </p>
          <div>
            <span onClick={handleRemoveClick} className="material-icons">
              delete_outline
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableTodos;
