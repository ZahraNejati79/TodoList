import { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const changeHandler = (e) => {
    console.log(e.target.value);
    setTodo(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    props.submitTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={submitTodo}>
        <input type="text" value={todo} onChange={changeHandler} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
