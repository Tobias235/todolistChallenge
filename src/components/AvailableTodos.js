import styles from "./AvailableTodos.module.css";
import Button from "./Buttons";
const AvailableTodos = ({
  todos,
  toggleComplete,
  removeTodo,
  removeTodos,
  completeActive,
}) => {
  const handleCheckboxClick = (e) => {
    const id = e.currentTarget.getAttribute("value");
    toggleComplete(id);
  };

  const handleRemoveClick = (e) => {
    const id =
      e.currentTarget.parentElement.parentElement.getAttribute("value");
    removeTodo(id);
  };

  const handleRemoveAllTodos = (e) => {
    const id =
      e.currentTarget.parentElement.parentElement.getAttribute("value");
    removeTodos(id);
  };

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
            {completeActive && (
              <span onClick={handleRemoveClick} className="material-icons">
                delete_outline
              </span>
            )}
          </div>
        </div>
      ))}
      {completeActive && (
        <div className={styles.buttonContainer}>
          <Button className={styles.deleteAll} onClick={handleRemoveAllTodos}>
            Delete All
          </Button>
        </div>
      )}
    </div>
  );
};

export default AvailableTodos;
