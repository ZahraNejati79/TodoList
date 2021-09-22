import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/Todolist";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
