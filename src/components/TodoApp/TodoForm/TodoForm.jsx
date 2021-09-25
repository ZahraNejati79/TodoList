import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const [todo, setTodo] = useState("");
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
      {props.edit ? (
        <>
          <input
            type="text"
            value={todo}
            onChange={changeHandler}
            placeholder="Update todo ..."
            ref={inputRef}
          />
          <button type="submit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={todo}
            onChange={changeHandler}
            placeholder="Add todo"
            ref={inputRef}
          />
          <button type="submit">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
