import { useState } from "react";
import style from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setTodos([...todos, [todo]]);
    setTodo("");
  }
  return (
    <form className={style.todoform}>
      <div className={style.inputContainer}>
        <input
          className={style.modernInput}
          type="text"
          placeholder="Enter your task..."
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
        ></input>
        <button
          className={style.modernButton}
          onClick={handleClick}
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
