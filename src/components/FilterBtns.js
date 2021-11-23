import Card from "./Card";
import styles from "./FilterBtns.module.scss";

const FilterBtns = ({ tab, setTab }) => {
  const handleActiveTab = (e) => {
    setTab(e.target.innerHTML);
  };

  const all = tab === "All" ? styles.active : null;
  const active = tab === "Active" ? styles.active : null;
  const completed = tab === "Completed" ? styles.active : null;

  return (
    <Card>
      <button
        type="button"
        className={`${styles.todoHeaderBtns} ${all}`}
        onClick={handleActiveTab}
      >
        All
      </button>
      <button
        type="button"
        className={`${styles.todoHeaderBtns} ${active}`}
        onClick={handleActiveTab}
      >
        Active
      </button>
      <button
        type="button"
        className={`${styles.todoHeaderBtns} ${completed}`}
        onClick={handleActiveTab}
      >
        Completed
      </button>
    </Card>
  );
};

export default FilterBtns;
