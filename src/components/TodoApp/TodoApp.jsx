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
  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => id === todo.id);
    // clon todoSelected
    const todoSelected = { ...todos[index] };
    todoSelected.isCompleted = !todoSelected.isCompleted;
    //clon todos
    const updatedTodos = [...todos];
    updatedTodos[index] = todoSelected;
    setTodos(updatedTodos);
  };
  const deleteHandler = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };
  return (
    <div>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        todos={todos}
        onComplete={completeHandler}
        onDelete={deleteHandler}
      />
    </div>
  );
};

export default TodoApp;
