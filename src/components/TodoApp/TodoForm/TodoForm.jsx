import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [todo, setTodo] = useState(props.edit ? props.edit.text : "");
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    props.submitTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={submitTodo}>
      <div className="formControl">
        <input
          type="text"
          value={todo}
          onChange={changeHandler}
          placeholder={props.edit ? "Update Todo" : "Add Todo"}
          ref={inputRef}
        />
        <button className={props.edit ? "update" : "Add"} type="submit">
          {props.edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
