import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import styles from "./App.module.scss";
function App() {
  return (
    <div>
      <h1 className={styles.title}>#Todo</h1>
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
