import styles from "./DeleteBtn.module.scss";

const DeleteBtn = (props) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={props.onClick}>Delete All</button>
    </div>
  );
};

export default DeleteBtn;
