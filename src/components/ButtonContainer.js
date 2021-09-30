import Card from "./Card";
import Buttons from "./Buttons";
import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ todosFilter }) => {
  return (
    <Card>
      <Buttons onClick={todosFilter} className={styles.todoHeaderBtns}>
        All
      </Buttons>
      <Buttons onClick={todosFilter} className={styles.todoHeaderBtns}>
        Active
      </Buttons>
      <Buttons onClick={todosFilter} className={styles.todoHeaderBtns}>
        Completed
      </Buttons>
    </Card>
  );
};

export default ButtonContainer;
