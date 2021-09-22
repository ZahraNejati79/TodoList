import { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.addTodoHandler(todo);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={todo} onChange={changeHandler} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
