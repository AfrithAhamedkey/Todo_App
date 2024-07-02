import style from "./todoitem.module.css";
export default function Todoitem({ item }) {
  return (
    <div className={style.item}>
      <div className={style.name}>{item}</div>
      <hr />
    </div>
  );
}
