import Todoitem from "./Todoitem";
import style from "./todolist.module.css";
export default function TodoList({ todos }) {
  return (
    <div className={style.list}>
      {todos.map((items) => (
        <Todoitem key={items} item={items} />
      ))}
    </div>
  );
}
